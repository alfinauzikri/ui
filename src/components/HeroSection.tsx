import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {

    const openAboutModal = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToList = () => {
        const listSection = document.getElementById('list');
        if (listSection) {
            listSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
            <div className="container-wrapper">
                <div className="flex flex-col justify-center md:items-center gap-4">
                    <a href="https://github.com/alfinauzikri/ui" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Badge className="text-sm leading-relaxed" variant="secondary">
                            alfinauzikri/ui
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </Badge>
                    </a>
                    <h1
                        className="text-3xl md:text-5xl font-semibold md:text-center leading-tight md:max-w-3xl">
                        Admin Templates & UI Kits
                    </h1>
                    <p
                        className="md:text-xl font-medium md:text-center text-muted-foreground leading-relaxed md:max-w-2xl">
                        Powering your next dashboard with beautifully crafted open-source designs and components.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-7">
                        <Button className="py-5 text-md w-full md:w-auto" onClick={scrollToList}>Start Exploring</Button>
                        <Button className="py-5 text-md w-full md:w-auto" variant="ghost" onClick={openAboutModal}>Why This Exists?</Button>
                    </div>
                </div>
            </div>
        </section >
    );
}