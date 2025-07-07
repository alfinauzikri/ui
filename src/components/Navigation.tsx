import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Icons } from "@/components/Icons";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function GitHubStarsButton({ stars }: { stars: number | null }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <a
                    href="https://github.com/alfinauzikri/ui"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="ghost" className="flex items-center gap-1.5">
                        <Icons.github className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">{stars ?? "0"}</span>
                    </Button>
                </a>
            </TooltipTrigger>
            <TooltipContent>
                <p>Star on GitHub</p>
            </TooltipContent>
        </Tooltip>

    );
}

function HeaderRight({ stars }: { stars: number | null }) {
    return (
        <div className="flex items-center gap-1">
            <GitHubStarsButton stars={stars} />
            <div className="w-px h-5 bg-border" />
            <ThemeToggle />
        </div>
    );
}

function LogoLink() {
    return (
        <a href="/" className="flex items-center gap-2" aria-label="Home">
            <h1 className="text-xl font-bold text-foreground">ui.</h1>
        </a>
    );
}

export function Navigation() {
    const [starCount, setStarCount] = useState<number | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/repos/alfinauzikri/ui")
            .then((res) => res.json())
            .then((data) => setStarCount(data.stargazers_count))
            .catch(() => setStarCount(0)); // fallback kalau fetch gagal
    }, []);

    return (
        <header
            id="header"
            className="top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85"
        >
            <div className="hidden container md:flex items-center justify-between mx-auto py-4">
                <LogoLink />
                <HeaderRight stars={starCount} />
            </div>

            <div className="container-wrapper md:hidden flex items-center justify-between mx-auto py-5">
                <LogoLink />
                <HeaderRight stars={starCount} />
            </div>
        </header>
    );
}
