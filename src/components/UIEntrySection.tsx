import { useState, useMemo } from 'react';
import { entries } from '@/lib/loadEntries';
import type { UIEntry } from '@/types/entry';
import { UIEntryCard } from '@/components/UIEntryCard';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function getUniqueFrameworks(data: UIEntry[]) {
    const set = new Set<string>();
    data.forEach((entry) => {
        entry.frameworks.forEach((fw) => set.add(fw.name));
    });
    return Array.from(set).sort();
}

export function UIEntrySection() {
    const [activeFramework, setActiveFramework] = useState<string>('All');
    const frameworks = getUniqueFrameworks(entries);

    type SortOption = 'stars-desc' | 'stars-asc' | 'title-asc' | 'title-desc';

    const [sortOption, setSortOption] = useState<SortOption>('stars-desc');

    const filteredEntries = useMemo(() => {
        let base = activeFramework === 'All'
            ? entries
            : entries.filter((entry) =>
                entry.frameworks.some((fw) => fw.name === activeFramework)
            );

        return [...base].sort((a, b) => {
            switch (sortOption) {
                case 'stars-desc':
                    return (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0);
                case 'stars-asc':
                    return (a.stargazers_count ?? 0) - (b.stargazers_count ?? 0);
                case 'title-asc':
                    return a.title.localeCompare(b.title);
                case 'title-desc':
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });
    }, [activeFramework, sortOption]);

    return (
        <section id="list" className="py-12 md:py-14 scroll-mt-12">
            <div className="container-wrapper">
                <div className="space-y-8">
                    {/* Filter */}
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        {/* Left: filter buttons */}
                        <div className="flex gap-2 flex-wrap">
                            <Button variant={activeFramework === 'All' ? 'default' : 'ghost'} onClick={() => setActiveFramework('All')}>
                                All
                            </Button>
                            {frameworks.map((fw) => (
                                <Button
                                    key={fw}
                                    variant={activeFramework === fw ? 'default' : 'ghost'}
                                    onClick={() => setActiveFramework(fw)}
                                >
                                    {fw}
                                </Button>
                            ))}
                        </div>

                        {/* Right: sorting */}
                        <div className="flex items-center gap-2">
                            <Select
                                value={sortOption}
                                onValueChange={(value) => setSortOption(value as SortOption)}
                            >
                                <SelectTrigger className="text-sm">
                                    <span className="text-muted-foreground">Sort:</span>
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="stars-desc">Most Starred</SelectItem>
                                    <SelectItem value="stars-asc">Least Starred</SelectItem>
                                    <SelectItem value="title-asc">A–Z</SelectItem>
                                    <SelectItem value="title-desc">Z–A</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                        {filteredEntries.map((entry, index) => (
                            <UIEntryCard key={index} data={entry} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
