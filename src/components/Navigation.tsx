import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"

export function Navigation() {
    const [starCount, setStarCount] = useState<number | null>(null);

    useEffect(() => {
        fetch('https://api.github.com/repos/alfinauzikri/ui')
            .then(response => response.json())
            .then(data => setStarCount(data.stargazers_count))
    }, []);

    return (
        <header id="header" className="top-0 sticky z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
            <div className="hidden container md:flex flex-row items-center justify-between mx-auto py-4">
                <div className="flex gap-10">
                    <a href="javaScript:void(0)">
                        <h1 className="text-xl font-bold text-foreground">
                            <span className="flex items-center gap-2">
                                ui.
                            </span>
                        </h1>
                        <span className="sr-only">Home</span>
                    </a>
                </div>
                <Button asChild variant="ghost" className="flex gap-2">
                    <a href="https://github.com/alfinauzikri/ui">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                        <span className="text-sm font-semibold">
                            {starCount !== null ? starCount : "0"}
                        </span>
                    </a>
                </Button>
            </div>

            <div className="container-wrapper md:hidden flex items-center justify-between mx-auto py-6">
                <a href="javaScript:void(0)">
                    <h1 className="text-xl font-bold text-foreground">
                        <span className="flex items-center gap-2">
                            ui.
                        </span>
                    </h1>
                    <span className="sr-only">Home</span>
                </a>
            </div>
        </header>
    )
}