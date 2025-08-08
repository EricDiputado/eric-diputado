import { useState } from 'react';
import './App.css';
import Header from './sections/Header.tsx';
import Footer from './sections/Footer.tsx';
import ContactSection from './sections/ContactSection.tsx';
import ProjectsSection from './sections/ProjectsSection.tsx';
import SkillsSection from './sections/SkillsSection.tsx';
import AboutSection from './sections/AboutSection.tsx';
import HeroSection from './sections/HeroSection.tsx';

// Data for the sections
export const personalData = {
    name: 'Eric Diputado',
    title: 'Software Developer',
    about: "Hey! I'm Eric. I'm a creative, extrovert, coder, musician, and passionate about people, technology and art.\nMy journey in web development is driven by a curiosity for how things work and a desire to build beautiful, functional experiences. I believe that a great website is not just a tool, but a reflection of character and creativity.",
    skills: [
        { name: 'React', level: '90%' },
        { name: 'JavaScript', level: '85%' },
        { name: 'HTML & CSS', level: '95%' },
        { name: 'UI/UX Design', level: '80%' },
        { name: 'Animation', level: '75%' },
    ],
    projects: [
        {
            id: 1,
            title: 'Project Alpha',
            description: 'A responsive web application built with React and Tailwind CSS.',
            tech: ['React', 'Tailwind CSS', 'JavaScript'],
            link: '#',
        },
        {
            id: 2,
            title: 'Art Portfolio',
            description: 'An interactive portfolio showcasing digital art and animations.',
            tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
            link: '#',
        },
    ],
    contact: {
        email: 'your.email@example.com',
        linkedin: 'your-linkedin-profile',
        github: 'your-github-profile',
    },
};

const App = () => {
    const [, setActiveSection] = useState('home');

    return (
        <div className="bg-emerald-950 text-amber-50 min-h-screen font-sans antialiased">
            <Header personalData={personalData} setActiveSection={setActiveSection} />
            <HeroSection personalData={personalData} />
            <AboutSection personalData={personalData} />
            <SkillsSection personalData={personalData} />
            <ProjectsSection personalData={personalData} />
            <ContactSection personalData={personalData} />
            <Footer />
        </div>
    );
};

export default App;
