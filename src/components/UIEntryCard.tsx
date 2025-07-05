import type { UIEntry, FrameworkEntry } from '@/types/entry';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ExternalLink } from 'lucide-react';
import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Props {
  data: UIEntry;
}

export function UIEntryCard({ data }: Props) {

  const [activeTab, setActiveTab] = React.useState(0);
  const framework = data.frameworks[activeTab];

  const formatStarCount = (count: number) => {
    if (count >= 1_000_000) {
      return `${(count / 1_000_000).toFixed(1)}m`;
    } else if (count >= 1_000) {
      return `${(count / 1_000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const getRepoUrl = (framework: FrameworkEntry) => {
    if (framework.repo.startsWith('http')) {
      return framework.repo;
    }
    return `https://github.com/${framework.repo}`;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group rounded-2xl flex flex-col justify-between h-full p-0 space-y-4 cursor-pointer">

          {/* Thumbnail */}
          <AspectRatio ratio={16 / 9}>
            <img
              src={`/assets/images/${data.thumbnail}`}
              alt={data.title}
              className="object-cover rounded-t-2xl"
              loading="lazy"
            />
          </AspectRatio>

          {/* Title, Description, Tags */}
          <div className="flex flex-col justify-between flex-1 space-y-4">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold group-hover:underline transition">{data.title}</h1>
                  {typeof data.stargazers_count === 'number' && (
                    <span className="text-sm text-muted-foreground font-medium">
                      {formatStarCount(data.stargazers_count)} stars
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
              </div>
              <div className="flex gap-2 flex-wrap mt-3">
                {data.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="p-6 md:p-8 rounded-2xl md:min-w-[700px] max-w-full space-y-2">

        {/* Thumbnail */}
        <AspectRatio ratio={16 / 9}>
          <img
            src={`/assets/images/${data.thumbnail}`}
            alt={data.title}
            className="object-cover rounded-2xl"
            loading="lazy"
          />
        </AspectRatio>

        {/* Title, Description, Tags */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-semibold">{data.title}</DialogTitle>
            {typeof data.stargazers_count === 'number' && (
              <span className="text-sm text-muted-foreground font-medium">
                {formatStarCount(data.stargazers_count)} stars
              </span>
            )}
          </div>
          <DialogDescription className="text-muted-foreground">
            {data.description}
          </DialogDescription>
          <div className="flex items-center gap-2 mt-4">
            {data.tags.map((tag, i) => (
              <Badge key={i} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Framework Selector */}
        <div className="space-y-2">
          <h2 className="text-sm font-semibold">Available on:</h2>
          <div className="flex gap-2">
            {data.frameworks.map((framework, i) => (
              <Button
                key={i}
                size="sm"
                variant={activeTab === i ? 'default' : 'ghost'}
                onClick={() => setActiveTab(i)}
              >
                {framework.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Framework Details */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button asChild>
            <a href={framework.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
              Live Preview
              <ExternalLink />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={getRepoUrl(framework)} target="_blank" rel="noopener noreferrer" className="flex items-center">
              View Repository
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
