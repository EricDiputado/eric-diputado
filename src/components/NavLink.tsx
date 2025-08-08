import React from "react";

type NavLinkProps = {
    to: string;
    label: string;
    setActiveSection: (section: string) => void;
};

const NavLink: React.FC<NavLinkProps> = ({ to, label, setActiveSection }) => (
    <a
        href={`#${to}`}
        onClick={() => setActiveSection(to)}
        className="text-lg font-medium text-amber-50 hover:text-amber-200 transition-colors duration-300"
    >
        {label}
    </a>
);

export default NavLink;