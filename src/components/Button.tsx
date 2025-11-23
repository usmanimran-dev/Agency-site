import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'mint' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
}) => {
    const baseClasses = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center transform';

    const variants = {
        primary: 'bg-gradient-to-r from-royalBlue to-blue-600 text-white hover:shadow-glow-blue hover:scale-105',
        secondary: 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105',
        accent: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105',
        mint: 'bg-gradient-to-r from-mint to-emerald-500 text-white hover:shadow-glow-mint hover:scale-105',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-darkNavy hover:scale-105',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            type={type}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{
                duration: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.button>
    );
};

export default Button;
