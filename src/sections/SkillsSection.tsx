
export default ({ personalData }: { personalData: any }) => (
    <section id="skills" className="py-20 md:py-32 bg-emerald-900">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-12 text-center">
                My Skills
            </h2>
            <div className="space-y-8">
                {personalData.skills.map((skill: any) => (
                    <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-lg text-amber-50 font-medium">{skill.name}</span>
                            <span className="text-sm text-amber-200">{skill.level}</span>
                        </div>
                        <div className="w-full bg-emerald-700 rounded-full h-2.5">
                            <div
                                className="bg-amber-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: skill.level }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
