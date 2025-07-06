import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';

export function ContributeSection() {
    return (
        <section className="py-8 md:py-12">
            <div className="container-wrapper">
                <div className="p-8 bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/95 rounded-2xl border border-primary hover:shadow-sm transition-all duration-300 ease-in-out">
                    <div
                        className="flex flex-col md:flex-row gap-8 md:gap-4 items-center justify-between">
                        <div className="flex flex-col items-start gap-2 md:gap-0">
                            <h1 className="text-2xl font-semibold text-primary-foreground">
                                Contribute to the Project
                            </h1>
                            <p className="mt-2 text-muted leading-relaxed max-w-4xl">
                                This project is open-source and welcomes contributions from the community. Whether it's fixing bugs, adding new features, or improving documentation, your help is greatly appreciated!
                            </p>
                        </div>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="w-full md:w-auto">
                            <a target="_blank" rel="noopener noreferrer" className="flex items-center" href="https://github.com/alfinauzikri/ui">
                                <Icons.github className="mr-2 fill-current" />
                                Contribute on GitHub
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}