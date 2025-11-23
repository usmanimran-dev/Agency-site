import React from 'react';

interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className }) => {
    return (
        <section className={`py-12 px-4 md:px-8 lg:px-12 ${className || ''}`}>
            {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
            {children}
        </section>
    );
};

export default Section;
