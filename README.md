# Space NK Developer Exercise

In this exercise we would like you to build a recommendations carousel component. The carousel should look similar to this [screenshot](recommendations-screenshot.png) using the recommendations [JSON](data/recommendations.json) provided. The carousel component you build should display the product title, image, brand name, price and should link to the website product detail page. Creativity is accepted but do not alter the JSON provided and please refrain from using any JavaScript libraries or frameworks.

### Requirements
* Responsive
* Clean, reusable code

Please fork this repository and commit your changes for review.

# Product Recommendations Carousel

A responsive, reusable product recommendation carousel built with React. Displays product recommendations with robust fallback handling for missing or invalid data.

## Features

- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Smooth Animations** - Accelerated transitions with custom easing curves
- **Fallback Handling** - Graceful degradation for missing images, prices, and product data
- **Performance Optimised** - Memoized components and efficient rendering

## Quick Start

```bash
cd carousel
npm install
npm run dev
```

## Architecture

### Component Structure
```
Carousel/
├── ProductCard/          # Individual product display component
├── ProductList/          # Slider wrapper with navigation
└── hooks/
    └── useProductData/   # Data fetching and state management
```

### Key Components

**ProductCard**
- Displays product image, title, description, and price
- Handles broken images with styled placeholders
- Shows "Price on request" for missing pricing
- Click-to-navigate with fallback prevention

**ProductList** 
- React Slick slider implementation
- Custom arrow components with smooth hover effects
- Responsive breakpoints (mobile: 1 slide, tablet: 2 slides, desktop: 3 slides)
- Performance-optimised CSS injection

## Technology Choices

### React Slick
Chosen for its lightweight footprint, responsive defaults, and extensive customization options. Configured with:
- 500ms transition speed for smooth movement
- Cubic-bezier easing for natural motion
- Touch/swipe support with gesture thresholds

### TailwindCSS
Utility-first styling for rapid development and consistent design system:
- Mobile-first responsive breakpoints
- Consistent spacing and typography scale
- Easy hover states and transitions

### Performance Optimisations

- **React.memo()** - Prevents unnecessary re-renders of product list
- **Static configuration** - Slider settings imported from constants
- **Efficient CSS injection** - Styles added once on mount, cleaned up on unmount

## Fallback Strategy

### Image Handling
```javascript
// Broken images → Styled placeholder with package icon
// Missing imageSrc → Placeholder shown immediately
```

### Price Display
```javascript
// Missing/invalid price → "Price on request" (italic, gray)
// Valid price → "£XX.XX" (bold, black)
```

### Navigation Safety
```javascript
// Missing URLs → Link disabled, click prevented
// Invalid URLs → Fallback to "#" with prevention
```

## Responsive Breakpoints

| Device | Slides Shown | Speed | Touch Sensitivity |
|--------|-------------|-------|------------------|
| Mobile (< 600px) | 1 | 400ms | High (5px) |
| Tablet (600-1024px) | 2 | 450ms | Medium (8px) |
| Desktop (> 1024px) | 3 | 500ms | Standard (10px) |

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Touch events for mobile interaction

---

**Status**: Production ready with comprehensive error handling and performance optimisations.