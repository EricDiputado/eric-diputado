export default ({ personalData }: { personalData: any }) => (
    <section id="about" className="py-20 md:py-32 bg-emerald-950">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6 text-center">
                About Me
            </h2>
            <p className="text-lg text-amber-100 leading-relaxed text-center">
                {personalData.about}
            </p>
        </div>
    </section>
);
