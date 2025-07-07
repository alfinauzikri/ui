import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="py-12 md:py-24 bg-gradient-to-b from-background to-background/95">
            <div className="container-wrapper">
                <div className="flex flex-col justify-center md:items-center gap-4">
                    <a href="https://github.com/alfinauzikri/ui" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Badge className="text-sm leading-relaxed" variant="secondary">
                            alfinauzikri/ui
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </Badge>
                    </a>
                    <h1
                        className="text-3xl md:text-5xl font-semibold md:text-center leading-snug md:leading-tight text-pretty md:max-w-3xl">
                        Admin Templates & UI Kits
                    </h1>
                    <p
                        className="md:text-xl font-medium md:text-center text-muted-foreground leading-relaxed text-pretty md:max-w-2xl">
                        Powering your next dashboard with beautifully crafted open-source designs and components.
                    </p>
                </div>
            </div>
        </section>
    );
}