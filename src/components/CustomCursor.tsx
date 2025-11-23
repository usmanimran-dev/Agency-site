import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import './CustomCursor.css';

export const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const mousePosition = useMousePosition();

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        const { x, y } = mousePosition;

        // Smooth cursor follow with GSAP-like easing
        requestAnimationFrame(() => {
            cursor.style.transform = `translate(${x}px, ${y}px)`;
            cursorDot.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Check for hoverable elements
        const handleMouseOver = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, [role="button"]')) {
                cursor?.classList.add('cursor-hover');
            }
        };

        const handleMouseOut = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, [role="button"]')) {
                cursor?.classList.remove('cursor-hover');
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [mousePosition]);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor" />
            <div ref={cursorDotRef} className="custom-cursor-dot" />
        </>
    );
};
