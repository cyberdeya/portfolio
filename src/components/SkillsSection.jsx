import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
} from "react-icons/fa";

import {
    SiTailwindcss,
} from "react-icons/si";

export const SkillsSection = () => {
    const skills = [
        {
            name: "HTML5",
            icon: <FaHtml5 className="w-10 h-10" />,
        },
        {
            name: "CSS3",
            icon: <FaCss3Alt className="w-10 h-10" />,
        },
        {
            name: "JavaScript",
            icon: <FaJs className="w-10 h-10" />,
        },
        {
            name: "React",
            icon: <FaReact className="w-10 h-10" />,
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="w-10 h-10" />,
        },
    ];

    return (
        <section
            id="skills"
            className="py-24 px-4 relative overflow-hidden"
        >
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        My <span className="text-primary">Skills</span>
                    </h2>

                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Technologies and tools I use to build modern,
                        responsive, and high-performance web applications.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="gradient-border p-[1px] rounded-3xl"
                        >
                            <div className="bg-background rounded-3xl p-6 flex flex-col items-center justify-center gap-4 card-hover min-h-[180px]">
                                <div className="text-primary">
                                    {skill.icon}
                                </div>

                                <h3 className="font-semibold text-lg text-center">
                                    {skill.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};