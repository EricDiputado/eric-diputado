import NavLink from "../components/NavLink";

export default ({ personalData, setActiveSection }: { personalData: any; setActiveSection: (section: string) => void }) => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-950 bg-opacity-70 backdrop-blur-sm p-4 md:p-6 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center px-4">
            <div className="text-xl md:text-2xl font-bold text-amber-400">
                {personalData.name}
            </div>
            <div className="flex space-x-4 md:space-x-8">
                <NavLink to="about" label="About" setActiveSection={setActiveSection} />
                <NavLink to="skills" label="Skills" setActiveSection={setActiveSection} />
                <NavLink to="projects" label="Projects" setActiveSection={setActiveSection} />
                <NavLink to="contact" label="Contact" setActiveSection={setActiveSection} />
            </div>
        </nav>
    </header>
);