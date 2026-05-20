import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section
            id="about"
            className="py-24 px-4 relative overflow-hidden"
        >
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Passionate about building modern, responsive, and
                        user-friendly web experiences with clean design and
                        scalable architecture.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <div className="space-y-8">
                        <div className="space-y-5">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                                <User className="w-4 h-4 text-primary" />

                                <span className="text-sm font-medium text-primary">
                                    Web Developer
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                                Crafting modern digital experiences with
                                creativity & performance.
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                                development, I specialize in creating
                                responsive, accessible, and high-performance web
                                applications using modern technologies.
                            </p>

                        </div>

                        {/* Button */}
                        <div className="pt-2">
                            <a href="#contact" className="cosmic-button">
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right Side Cards */}
                    <div className="grid gap-6">
                        {/* Card 1 */}
                        <div className="gradient-border p-[1px] rounded-3xl">
                            <div className="bg-background rounded-3xl p-6 card-hover">
                                <div className="flex items-start gap-5">
                                    <div className="p-4 rounded-2xl bg-primary/10">
                                        <Code className="w-7 h-7 text-primary" />
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">
                                            Web Development
                                        </h4>

                                        <p className="text-muted-foreground leading-relaxed">
                                            Building responsive and performant
                                            websites using modern frameworks and
                                            best practices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="gradient-border p-[1px] rounded-3xl">
                            <div className="bg-background rounded-3xl p-6 card-hover">
                                <div className="flex items-start gap-5">
                                    <div className="p-4 rounded-2xl bg-primary/10">
                                        <Briefcase className="w-7 h-7 text-primary" />
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">
                                            Professional Experience
                                        </h4>

                                        <p className="text-muted-foreground leading-relaxed">
                                            Delivering scalable and user-focused
                                            solutions for startups, businesses,
                                            and personal brands.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="gradient-border p-[1px] rounded-3xl">
                            <div className="bg-background rounded-3xl p-6 card-hover">
                                <div className="flex items-start gap-5">
                                    <div className="p-4 rounded-2xl bg-primary/10">
                                        <User className="w-7 h-7 text-primary" />
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">
                                            User-Centered Design
                                        </h4>

                                        <p className="text-muted-foreground leading-relaxed">
                                            Focusing on intuitive experiences,
                                            accessibility, and smooth
                                            interactions that users genuinely
                                            enjoy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};