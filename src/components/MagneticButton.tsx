import React, { useRef, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

interface MagneticButtonProps {
    children: React.ReactNode;
    strength?: number;
    className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    strength = 0.3,
    className = '',
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const mousePosition = useMousePosition();

    const handleMouseMove = () => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = mousePosition.x - centerX;
        const distanceY = mousePosition.y - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        const maxDistance = 100;

        if (distance < maxDistance) {
            const pullX = distanceX * strength;
            const pullY = distanceY * strength;
            setPosition({ x: pullX, y: pullY });
        } else {
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    React.useEffect(() => {
        handleMouseMove();
    }, [mousePosition]);

    return (
        <div
            ref={ref}
            className={`magnetic-button ${className}`}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: position.x === 0 ? 'transform 0.3s ease-out' : 'none',
            }}
        >
            {children}
        </div>
    );
};
