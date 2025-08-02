import React from 'react';
import NavigationButton, { 
    HomeButton, 
    BlogsButton, 
    CompareButton, 
    NavigationLink 
} from '@/Component/Navigation/NavigationButton';
import { useNavigation } from '@/hooks/useNavigation';

/**
 * Demo component showing how to use navigation from anywhere in the app
 * This demonstrates various ways to navigate to different sections
 */
const NavigationDemo = () => {
    const { goToHome, goToBlogs, goToCompare } = useNavigation();

    // Example of programmatic navigation
    const handleCustomNavigation = () => {
        // You can add custom logic before navigation
        console.log('Navigating to blogs with custom logic...');
        goToBlogs();
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#024B53] mb-6 text-center">
                Navigation Examples
            </h2>
            <p className="text-gray-600 mb-8 text-center">
                These buttons can be used anywhere in your app to navigate to different sections
            </p>

            {/* Pre-configured navigation buttons */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Pre-configured Buttons</h3>
                <div className="flex flex-wrap gap-4">
                    <HomeButton variant="primary" />
                    <BlogsButton variant="outline" />
                    <CompareButton variant="secondary" />
                </div>
            </div>

            {/* Custom navigation buttons with different variants */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Custom Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                    <NavigationButton section="home" variant="primary" size="sm">
                        🏠 Home (Small)
                    </NavigationButton>
                    <NavigationButton section="blogs" variant="outline" size="md">
                        📝 Blogs (Medium)
                    </NavigationButton>
                    <NavigationButton section="compare" variant="ghost" size="lg">
                        ⚖️ Compare (Large)
                    </NavigationButton>
                    <NavigationButton section="home" variant="link">
                        Link Style Home
                    </NavigationButton>
                </div>
            </div>

            {/* Navigation links */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Navigation Links</h3>
                <div className="space-y-2">
                    <p>
                        Check out our <NavigationLink section="blogs">latest blogs</NavigationLink> for 
                        education insights.
                    </p>
                    <p>
                        Want to <NavigationLink section="compare">compare colleges</NavigationLink>? 
                        We've got you covered.
                    </p>
                    <p>
                        <NavigationLink section="home">Return to home</NavigationLink> anytime.
                    </p>
                </div>
            </div>

            {/* Programmatic navigation */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Programmatic Navigation</h3>
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => goToHome()}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Go Home (Hook)
                    </button>
                    <button
                        onClick={handleCustomNavigation}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                    >
                        Custom Logic + Navigate
                    </button>
                    <button
                        onClick={() => goToCompare()}
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
                    >
                        Compare Colleges (Hook)
                    </button>
                </div>
            </div>

            {/* URL Examples */}
            <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Direct URL Navigation</h3>
                <p className="text-gray-600 text-sm mb-2">
                    You can also navigate directly using URLs:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li><code className="bg-gray-200 px-2 py-1 rounded">/#home</code> - Goes to Home section</li>
                    <li><code className="bg-gray-200 px-2 py-1 rounded">/#blogs</code> - Goes to Blogs section</li>
                    <li><code className="bg-gray-200 px-2 py-1 rounded">/#compare</code> - Goes to Compare section</li>
                </ul>
            </div>
        </div>
    );
};

export default NavigationDemo;