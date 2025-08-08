export default ({ personalData }: { personalData: any }) => (
    <section id="projects" className="py-20 md:py-32 bg-emerald-950">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-12 text-center">
                Recent Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {personalData.projects.map((project: any) => (
                    <div
                        key={project.id}
                        className="bg-emerald-900 rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
                    >
                        <h3 className="text-xl font-bold text-amber-50 mb-2">
                            {project.title}
                        </h3>
                        <p className="text-amber-100 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech: string) => (
                                <span
                                    key={tech}
                                    className="text-xs font-semibold px-2 py-1 rounded-full bg-amber-600 text-white"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            className="text-amber-300 hover:text-amber-500 font-medium transition-colors duration-300"
                        >
                            View Project &rarr;
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);