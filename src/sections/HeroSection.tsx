export default ({ personalData }: { personalData: any }) => (
    <section
        id="home"
        className="relative h-screen flex flex-col justify-center items-center text-center p-4 md:p-8"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950 to-emerald-900 opacity-70 z-0"></div>
        <div className="relative z-10 p-6 md:p-12 rounded-2xl bg-emerald-900 bg-opacity-50 backdrop-blur-sm shadow-xl max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
                {personalData.name}
            </h1>
            <p className="text-xl md:text-2xl font-light text-amber-200 mb-8 animate-fade-in-up delay-200">
                {personalData.title}
            </p>
            <a
                href="#contact"
                className="inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-400"
            >
                Get In Touch
            </a>
        </div>
    </section>
);
