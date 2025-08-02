import { useEffect, useCallback } from 'react';
import navigationService from '@/Services/NavigationService';

/**
 * Custom hook for navigation functionality
 * Provides easy access to navigation methods from any component
 */
export const useNavigation = () => {
    // Navigation methods
    const goToHome = useCallback((options = {}) => {
        return navigationService.goToHome(options);
    }, []);

    const goToBlogs = useCallback((options = {}) => {
        return navigationService.goToBlogs(options);
    }, []);

    const goToCompare = useCallback((options = {}) => {
        return navigationService.goToCompare(options);
    }, []);

    const scrollToSection = useCallback((sectionId, options = {}) => {
        return navigationService.scrollToSection(sectionId, options);
    }, []);

    // Get current section from URL
    const getCurrentSection = useCallback(() => {
        return navigationService.getCurrentSectionFromUrl();
    }, []);

    // Get all available sections
    const getSections = useCallback(() => {
        return navigationService.getSections();
    }, []);

    // Check if section exists
    const sectionExists = useCallback((sectionId) => {
        return navigationService.sectionExists(sectionId);
    }, []);

    return {
        // Navigation methods
        goToHome,
        goToBlogs,
        goToCompare,
        scrollToSection,
        
        // Utility methods
        getCurrentSection,
        getSections,
        sectionExists,
        
        // Direct access to service (for advanced usage)
        navigationService
    };
};

/**
 * Hook for subscribing to navigation changes
 * @param {Function} callback - Function to call when navigation changes
 */
export const useNavigationSubscription = (callback) => {
    useEffect(() => {
        if (!callback || typeof callback !== 'function') {
            return;
        }

        const unsubscribe = navigationService.subscribe(callback);
        return unsubscribe;
    }, [callback]);
};

/**
 * Hook for handling URL hash navigation
 * Automatically scrolls to section on component mount if hash is present
 */
export const useHashNavigation = () => {
    useEffect(() => {
        // Handle initial navigation on mount
        navigationService.handleInitialNavigation();
    }, []);
};