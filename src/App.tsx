import { useState } from 'react';
import './App.css';
import Header from './sections/Header.tsx';
import Footer from './sections/Footer.tsx';
import ContactSection from './sections/ContactSection.tsx';
import ProjectsSection from './sections/ProjectsSection.tsx';
import SkillsSection from './sections/SkillsSection.tsx';
import AboutSection from './sections/AboutSection.tsx';
import HeroSection from './sections/HeroSection.tsx';
import personalData from './information/personalData.tsx';

const App = () => {
    const [activeSection, setActiveSection] = useState('intro');

    return (
        <div className="bg-emerald-950 text-amber-50 min-h-screen font-sans antialiased">
            <Header personalData={personalData} setActiveSection={setActiveSection} />
            <HeroSection activeSection={activeSection} setActiveSection={setActiveSection} />
            <AboutSection personalData={personalData} />
            <SkillsSection personalData={personalData} />
            <ProjectsSection personalData={personalData} />
            <ContactSection personalData={personalData} />
            <Footer />
        </div>
    );
};

export default App;
