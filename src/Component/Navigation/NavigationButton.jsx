import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';

/**
 * Reusable navigation button component
 * Can be used anywhere in the app to navigate to different sections
 */
const NavigationButton = ({ 
    section, 
    children, 
    className = '',
    variant = 'default',
    size = 'md',
    disabled = false,
    onClick = null,
    ...props 
}) => {
    const { scrollToSection, sectionExists } = useNavigation();

    // Validate section
    if (!sectionExists(section)) {
        console.warn(`Invalid section: ${section}`);
        return null;
    }

    const handleClick = (e) => {
        e.preventDefault();
        
        // Call custom onClick if provided
        if (onClick) {
            onClick(e);
        }

        // Navigate to section
        scrollToSection(section);
    };

    // Variant styles
    const variantStyles = {
        default: 'bg-white text-[#024B53] border border-[#024B53] hover:bg-[#024B53] hover:text-white',
        primary: 'bg-[#024B53] text-white hover:bg-[#025E68]',
        secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        outline: 'border-2 border-[#024B53] text-[#024B53] hover:bg-[#024B53] hover:text-white',
        ghost: 'text-[#024B53] hover:bg-[#024B53]/10',
        link: 'text-[#024B53] underline hover:text-[#025E68] p-0'
    };

    // Size styles
    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl'
    };

    const baseStyles = `
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-all duration-300 
        transform hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-[#024B53] focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${variantStyles[variant] || variantStyles.default}
        ${variant !== 'link' ? sizeStyles[size] : ''}
        ${className}
    `;

    return (
        <button
            className={baseStyles}
            onClick={handleClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default NavigationButton;

// Pre-configured navigation buttons for common use cases
export const HomeButton = ({ children = 'Go to Home', ...props }) => (
    <NavigationButton section="home" {...props}>
        {children}
    </NavigationButton>
);

export const BlogsButton = ({ children = 'View Blogs', ...props }) => (
    <NavigationButton section="blogs" {...props}>
        {children}
    </NavigationButton>
);

export const CompareButton = ({ children = 'Compare Colleges', ...props }) => (
    <NavigationButton section="compare" {...props}>
        {children}
    </NavigationButton>
);

// Navigation link component (for text links)
export const NavigationLink = ({ section, children, className = '', ...props }) => {
    const { scrollToSection, sectionExists } = useNavigation();

    if (!sectionExists(section)) {
        console.warn(`Invalid section: ${section}`);
        return null;
    }

    const handleClick = (e) => {
        e.preventDefault();
        scrollToSection(section);
    };

    return (
        <a
            href={`#${section}`}
            onClick={handleClick}
            className={`text-[#024B53] hover:text-[#025E68] transition-colors duration-300 cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </a>
    );
};