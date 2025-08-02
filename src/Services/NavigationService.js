/**
 * Navigation Service for Single Page Application
 * Handles smooth scrolling to different sections from anywhere in the app
 */

class NavigationService {
    constructor() {
        this.sections = {
            home: 'home',
            blogs: 'blogs', 
            compare: 'compare'
        };
        this.callbacks = new Set();
    }

    /**
     * Scroll to a specific section
     * @param {string} sectionId - The ID of the section to scroll to
     * @param {Object} options - Scroll options
     */
    scrollToSection(sectionId, options = {}) {
        const {
            offset = 64, // Default offset for navigation height
            behavior = 'smooth',
            block = 'start'
        } = options;

        // Validate section ID
        if (!Object.values(this.sections).includes(sectionId)) {
            console.warn(`Invalid section ID: ${sectionId}`);
            return false;
        }

        const element = document.getElementById(sectionId);
        if (!element) {
            console.warn(`Element with ID '${sectionId}' not found`);
            return false;
        }

        // Calculate scroll position with offset
        const elementTop = element.offsetTop - offset;
        
        // Scroll to the element
        window.scrollTo({
            top: elementTop,
            behavior: behavior
        });

        // Update URL hash without triggering page reload
        this.updateUrlHash(sectionId);

        // Notify subscribers about navigation
        this.notifySubscribers(sectionId);

        return true;
    }

    /**
     * Navigate to home section
     */
    goToHome(options = {}) {
        return this.scrollToSection(this.sections.home, options);
    }

    /**
     * Navigate to blogs section
     */
    goToBlogs(options = {}) {
        return this.scrollToSection(this.sections.blogs, options);
    }

    /**
     * Navigate to compare section
     */
    goToCompare(options = {}) {
        return this.scrollToSection(this.sections.compare, options);
    }

    /**
     * Update URL hash
     * @param {string} sectionId - The section ID to set in hash
     */
    updateUrlHash(sectionId) {
        if (window.history && window.history.pushState) {
            const newUrl = `${window.location.pathname}#${sectionId}`;
            window.history.pushState(null, '', newUrl);
        } else {
            window.location.hash = sectionId;
        }
    }

    /**
     * Get current section from URL hash
     */
    getCurrentSectionFromUrl() {
        const hash = window.location.hash.replace('#', '');
        return Object.values(this.sections).includes(hash) ? hash : this.sections.home;
    }

    /**
     * Handle initial page load with hash
     */
    handleInitialNavigation() {
        const sectionFromUrl = this.getCurrentSectionFromUrl();
        if (sectionFromUrl && sectionFromUrl !== this.sections.home) {
            // Delay to ensure page is loaded
            setTimeout(() => {
                this.scrollToSection(sectionFromUrl);
            }, 100);
        }
    }

    /**
     * Subscribe to navigation changes
     * @param {Function} callback - Callback function to call on navigation
     */
    subscribe(callback) {
        this.callbacks.add(callback);
        return () => this.callbacks.delete(callback);
    }

    /**
     * Notify all subscribers about navigation change
     * @param {string} sectionId - The section that was navigated to
     */
    notifySubscribers(sectionId) {
        this.callbacks.forEach(callback => {
            try {
                callback(sectionId);
            } catch (error) {
                console.error('Error in navigation callback:', error);
            }
        });
    }

    /**
     * Get all available sections
     */
    getSections() {
        return { ...this.sections };
    }

    /**
     * Check if a section exists
     * @param {string} sectionId - The section ID to check
     */
    sectionExists(sectionId) {
        return Object.values(this.sections).includes(sectionId);
    }
}

// Create a singleton instance
const navigationService = new NavigationService();

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    const sectionFromUrl = navigationService.getCurrentSectionFromUrl();
    navigationService.scrollToSection(sectionFromUrl);
});

// Handle initial page load
document.addEventListener('DOMContentLoaded', () => {
    navigationService.handleInitialNavigation();
});

export default navigationService;