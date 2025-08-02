# Single Page Navigation System Guide

## Overview

This navigation system allows you to create buttons, links, and programmatic navigation to different sections of your single-page application from anywhere in your codebase. All three main pages (HomePage, BlogsPage, CompareCollegePage) are rendered in a single scrollable view with smooth navigation.

## Features

- ✅ **Smooth scrolling navigation** between sections
- ✅ **URL hash support** for direct linking (e.g., `/#blogs`)
- ✅ **Active section detection** with visual indicators
- ✅ **Responsive design** for mobile and desktop
- ✅ **Programmatic navigation** from any component
- ✅ **Reusable components** for consistent navigation
- ✅ **Browser back/forward support**
- ✅ **Scroll progress indicator**

## Available Sections

| Section ID | Description | URL Hash |
|------------|-------------|----------|
| `home` | HomePage component | `/#home` |
| `blogs` | BlogsPage component | `/#blogs` |
| `compare` | CompareCollegePage component | `/#compare` |

## Usage Methods

### 1. Pre-configured Navigation Buttons

The easiest way to add navigation buttons:

```jsx
import { HomeButton, BlogsButton, CompareButton } from '@/Component/Navigation/NavigationButton';

function MyComponent() {
    return (
        <div>
            <HomeButton variant="primary" />
            <BlogsButton variant="outline" />
            <CompareButton variant="secondary" />
        </div>
    );
}
```

### 2. Custom Navigation Buttons

For more control over styling and content:

```jsx
import NavigationButton from '@/Component/Navigation/NavigationButton';

function MyComponent() {
    return (
        <div>
            <NavigationButton 
                section="home" 
                variant="primary" 
                size="lg"
                className="my-custom-class"
            >
                🏠 Go to Home
            </NavigationButton>
            
            <NavigationButton 
                section="blogs" 
                variant="outline"
                onClick={() => console.log('Custom logic before navigation')}
            >
                Read Our Blogs
            </NavigationButton>
        </div>
    );
}
```

#### Button Variants
- `default` - White background with brand border
- `primary` - Brand color background
- `secondary` - Gray background
- `outline` - Outlined button
- `ghost` - Transparent with hover effect
- `link` - Text link style

#### Button Sizes
- `sm` - Small button
- `md` - Medium button (default)
- `lg` - Large button
- `xl` - Extra large button

### 3. Navigation Links

For inline text links:

```jsx
import { NavigationLink } from '@/Component/Navigation/NavigationButton';

function MyComponent() {
    return (
        <p>
            Check out our <NavigationLink section="blogs">latest blogs</NavigationLink> or 
            <NavigationLink section="compare">compare colleges</NavigationLink> today!
        </p>
    );
}
```

### 4. Programmatic Navigation

Use the navigation hook for custom logic:

```jsx
import { useNavigation } from '@/hooks/useNavigation';

function MyComponent() {
    const { goToHome, goToBlogs, goToCompare, scrollToSection } = useNavigation();
    
    const handleSubmit = async (formData) => {
        // Process form data
        await submitData(formData);
        
        // Navigate to blogs after successful submission
        goToBlogs();
    };
    
    const handleCustomNavigation = () => {
        // Add custom logic
        trackAnalytics('navigation_click');
        
        // Navigate to specific section
        scrollToSection('compare');
    };
    
    return (
        <div>
            <button onClick={() => goToHome()}>Home</button>
            <button onClick={() => goToBlogs()}>Blogs</button>
            <button onClick={() => goToCompare()}>Compare</button>
            <button onClick={handleCustomNavigation}>Custom Logic</button>
        </div>
    );
}
```

### 5. Direct URL Navigation

Users can navigate directly using URLs:
- `yourdomain.com/#home` - Goes to Home section
- `yourdomain.com/#blogs` - Goes to Blogs section  
- `yourdomain.com/#compare` - Goes to Compare section

## Advanced Usage

### Navigation with Custom Options

```jsx
import { useNavigation } from '@/hooks/useNavigation';

function MyComponent() {
    const { scrollToSection } = useNavigation();
    
    const navigateWithCustomOffset = () => {
        scrollToSection('blogs', {
            offset: 100, // Custom offset from top
            behavior: 'smooth' // Scroll behavior
        });
    };
    
    return <button onClick={navigateWithCustomOffset}>Go to Blogs</button>;
}
```

### Subscribe to Navigation Changes

```jsx
import { useNavigationSubscription } from '@/hooks/useNavigation';

function MyComponent() {
    useNavigationSubscription((sectionId) => {
        console.log(`Navigated to: ${sectionId}`);
        // Track analytics, update state, etc.
    });
    
    return <div>Component that tracks navigation</div>;
}
```

### Check Current Section

```jsx
import { useNavigation } from '@/hooks/useNavigation';

function MyComponent() {
    const { getCurrentSection, sectionExists } = useNavigation();
    
    const currentSection = getCurrentSection();
    const isValidSection = sectionExists('blogs');
    
    return (
        <div>
            <p>Current section: {currentSection}</p>
            <p>Blogs section exists: {isValidSection ? 'Yes' : 'No'}</p>
        </div>
    );
}
```

## Integration Examples

### In a Card Component

```jsx
import { BlogsButton } from '@/Component/Navigation/NavigationButton';

function BlogCard({ title, excerpt }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <BlogsButton variant="outline" size="sm">
                Read More Blogs
            </BlogsButton>
        </div>
    );
}
```

### In a Hero Section

```jsx
import { CompareButton, BlogsButton } from '@/Component/Navigation/NavigationButton';

function HeroSection() {
    return (
        <div className="hero">
            <h1>Find Your Perfect College</h1>
            <p>Discover and compare colleges to make the best choice for your future.</p>
            <div className="flex gap-4">
                <CompareButton variant="primary" size="lg">
                    Compare Colleges Now
                </CompareButton>
                <BlogsButton variant="outline" size="lg">
                    Read Our Guides
                </BlogsButton>
            </div>
        </div>
    );
}
```

### In a Form Success Message

```jsx
import { useNavigation } from '@/hooks/useNavigation';

function ContactForm() {
    const { goToBlogs } = useNavigation();
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = async (data) => {
        await submitContactForm(data);
        setSubmitted(true);
        
        // Redirect to blogs after 2 seconds
        setTimeout(() => {
            goToBlogs();
        }, 2000);
    };
    
    if (submitted) {
        return (
            <div className="success-message">
                <p>Thank you for contacting us!</p>
                <p>Redirecting to our blogs...</p>
            </div>
        );
    }
    
    return <form onSubmit={handleSubmit}>{/* form fields */}</form>;
}
```

## File Structure

```
src/
├── Services/
│   └── NavigationService.js          # Core navigation service
├── hooks/
│   └── useNavigation.js              # React hooks for navigation
├── Component/
│   ├── Navbar/
│   │   └── SinglePageNav.jsx         # Main navigation component
│   ├── Navigation/
│   │   └── NavigationButton.jsx      # Reusable navigation components
│   └── Examples/
│       └── NavigationDemo.jsx        # Demo component with examples
└── GlobalComponent/
    └── Layout.jsx                     # Main layout with sections
```

## Best Practices

1. **Use pre-configured buttons** when possible for consistency
2. **Add custom logic** before navigation using the `onClick` prop or hooks
3. **Track analytics** when users navigate to measure engagement
4. **Validate sections** before navigation (the service does this automatically)
5. **Use meaningful button text** that describes the destination
6. **Consider mobile users** - the navigation adapts automatically
7. **Test URL navigation** to ensure direct links work properly

## Troubleshooting

### Navigation not working?
- Ensure the target section exists in the DOM
- Check that section IDs match exactly: `home`, `blogs`, `compare`
- Verify the NavigationService is imported correctly

### Smooth scrolling not smooth?
- Check CSS `scroll-behavior: smooth` is applied
- Verify no conflicting CSS is overriding scroll behavior

### URL hash not updating?
- Ensure NavigationService is handling URL updates
- Check browser history API is available

### Section not detected as active?
- Verify section IDs are correct
- Check scroll detection logic in SinglePageNav component

This navigation system provides a seamless way to navigate between sections while maintaining the single-page application benefits. Use these examples as a starting point and customize them according to your specific needs!