# WeatherFit App - Project Structure Documentation

## Overview

WeatherFit is a responsive weather application that provides real-time weather information and AI-powered outfit recommendations. The app uses **styled-components** for styling with custom CSS design tokens based on Tailwind's design system.

## Technology Stack

- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Styled Components 6.1.19** - CSS-in-JS styling
- **Custom CSS Variables** - Design tokens (spacing & typography)

## Project Structure

```
app/
├── src/
│   ├── components/          # All React components
│   │   ├── errorScreen/
│   │   │   ├── ErrorScreen.tsx           # Component logic
│   │   │   └── ErrorScreenStyled.tsx     # Styled components
│   │   ├── loadingScreen/
│   │   │   ├── LoadingScreen.tsx
│   │   │   └── LoadingScreenStyled.tsx
│   │   ├── locationHeader/
│   │   │   ├── LocationHeader.tsx
│   │   │   └── LocationHeaderStyled.tsx
│   │   ├── outfitRecommendation/
│   │   │   ├── OutfitRecommendation.tsx
│   │   │   └── OutfitRecommendationStyled.tsx
│   │   ├── temperatureDisplay/
│   │   │   ├── TemperatureDisplay.tsx
│   │   │   └── TemperatureDisplayStyled.tsx
│   │   ├── weatherDetails/
│   │   │   ├── WeatherDetails.tsx
│   │   │   └── WeatherDetailsStyled.tsx
│   │   └── weatherDisplay/
│   │       ├── WeatherDisplay.tsx
│   │       └── WeatherDisplayStyled.tsx
│   ├── services/            # API services
│   │   ├── weatherService.ts  # Weather API integration
│   │   └── aiService.ts       # AI outfit recommendations
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── assets/              # Static assets (SVG icons, images)
│   ├── App.tsx              # Root application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles & CSS variables
├── dist/                    # Build output (generated)
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── PROJECT_STRUCTURE.md     # This file
```

## Design System

### CSS Custom Properties

All design tokens are defined in [`src/index.css`](./src/index.css) and used throughout styled-components. All values use **responsive units** (`rem`, `em`) instead of fixed pixels for better accessibility and scalability.

#### Tailwind Spacing Scale

Complete spacing scale based on Tailwind's default values. All units are in `rem` for responsive scaling:

```css
--spacing-0: 0;
--spacing-1: 0.25rem;      /* 4px */
--spacing-2: 0.5rem;       /* 8px */
--spacing-3: 0.75rem;      /* 12px */
--spacing-4: 1rem;         /* 16px */
--spacing-5: 1.25rem;      /* 20px */
--spacing-6: 1.5rem;       /* 24px */
--spacing-8: 2rem;         /* 32px */
--spacing-10: 2.5rem;      /* 40px */
--spacing-12: 3rem;        /* 48px */
--spacing-16: 4rem;        /* 64px */
--spacing-20: 5rem;        /* 80px */
--spacing-24: 6rem;        /* 96px */
/* ... and more up to --spacing-96 */
```

**Usage in styled-components:**
```typescript
/* For widths, heights, icon sizes */
width: var(--spacing-12);   /* 48px */
height: var(--spacing-16);  /* 64px */

/* For flexible spacing with calc() */
padding: calc(var(--spacing-unit) * 4);  /* 16px */
margin: calc(var(--spacing-unit) * 2);   /* 8px */

/* For border radius, blur */
border-radius: var(--spacing-4);      /* 16px */
backdrop-filter: blur(var(--spacing-2-5));  /* 10px */
```

#### Typography Scale

All font sizes use `rem` units for accessibility (scales with user's browser font size):

```css
--font-size-xs:    0.75rem;    /* 12px - Small labels */
--font-size-sm:    0.875rem;   /* 14px - Secondary text */
--font-size-base:  1rem;       /* 16px - Body text */
--font-size-lg:    1.125rem;   /* 18px - Emphasized text */
--font-size-xl:    1.25rem;    /* 20px - Small headings */
--font-size-2xl:   1.5rem;     /* 24px - Medium headings */
--font-size-3xl:   1.875rem;   /* 30px - Large headings */
--font-size-4xl:   2.25rem;    /* 36px - XL headings */
--font-size-5xl:   3rem;       /* 48px - Display text */
--font-size-6xl:   3.75rem;    /* 60px - Hero text */
--font-size-7xl:   4.5rem;     /* 72px - Large display */
--font-size-8xl:   6rem;       /* 96px - XL display */
--font-size-9xl:   8rem;       /* 128px - Maximum size */
```

**Usage in styled-components:**
```typescript
font-size: var(--font-size-3xl);

/* Text shadows use em (relative to font size) */
text-shadow: 0.0625em 0.0625em 0.25em rgba(0, 0, 0, 0.3);
```

#### Why Responsive Units?

- **Accessibility**: Users can adjust browser font size and everything scales proportionally
- **Consistency**: Using `rem` ensures all spacing is relative to root font size
- **Flexibility**: `em` units for text-shadow scale automatically with font size
- **Future-proof**: Easier to adapt to different screen densities and zoom levels

### Responsive Breakpoints

The app uses a **mobile-first** approach with two optimized breakpoints:

- **Mobile**: `< 768px` (default, no media query needed)
- **Tablet**: `≥ 768px` (iPad and larger)
- **Desktop**: `≥ 1366px` (Laptops and desktops)

**Example:**
```typescript
export const Title = styled.h1`
  font-size: var(--font-size-3xl);  /* Mobile: 30px */

  @media (min-width: 768px) {
    font-size: var(--font-size-4xl);  /* Tablet: 36px */
  }

  @media (min-width: 1366px) {
    font-size: var(--font-size-5xl);  /* Desktop: 48px */
  }
`;
```

## Component Architecture

### File Naming Convention

Each component follows a consistent pattern:

1. **Component file**: `ComponentName.tsx` - Contains React logic and JSX
2. **Styled file**: `ComponentNameStyled.tsx` - Contains all styled-components

### Import Pattern

Components import their styled-components as a namespace:

```typescript
import * as S from './ComponentNameStyled';

export function ComponentName() {
  return (
    <S.Container>
      <S.Title>Hello</S.Title>
    </S.Container>
  );
}
```

### Documentation

All `*Styled.tsx` files include:
- **File-level JSDoc comment** describing the component's purpose
- **Inline comments** for each styled component explaining its role

Example:
```typescript
/**
 * Temperature Display Styled Components
 * Shows the current temperature, feels-like temp, weather icon, and condition
 */

/** Large temperature numeric value */
export const TempValue = styled.span`
  font-size: 5rem;
  font-weight: 700;
  /* ... */
`;
```

## Key Components

### 1. ErrorScreen
Displays error messages when API calls fail.

**Styled Components:**
- `Container` - Main centered layout
- `ErrorTitle` - Error heading
- `ErrorMessage` - Error description text

### 2. LoadingScreen
Shows animated spinner while fetching data.

**Styled Components:**
- `Container` - Centered flex container
- `Spinner` - Rotating circle animation
- `LoadingText` - Status message

### 3. LocationHeader
Displays user's location and current local time.

**Styled Components:**
- `Container` - Text-centered wrapper
- `LocationTitle` - Large location name
- `TimeIndicator` - Current time display

### 4. TemperatureDisplay
Shows current temperature, feels-like temp, weather icon, and condition.

**Styled Components:**
- `Container` - Main flex layout
- `TemperatureWrapper` - Groups temp and feels-like
- `TemperatureSection` - Temperature + degree symbol
- `TempValue` - Large numeric temperature
- `TempUnit` - Degree symbol (°C/°F)
- `FeelsLikeText` - "Feels like X°" text
- `ConditionSection` - Icon + condition text
- `WeatherIcon` - Weather condition icon
- `ConditionText` - Condition description

### 5. WeatherDetails
Displays humidity, precipitation, and wind speed.

**Styled Components:**
- `Container` - Flex grid layout
- `DetailItem` - Individual metric card
- `Icon` - Metric icon (humidity, rain, wind)
- `DetailLabel` - Metric name (HUMIDITY, RAIN, WIND)
- `DetailValue` - Metric value (percentage, mph)

### 6. OutfitRecommendation
Shows AI-generated clothing suggestions in a glass-morphism card.

**Styled Components:**
- `Container` - Glassmorphic card with backdrop blur
- `Title` - Section heading
- `RecommendationText` - AI-generated outfit advice

### 7. WeatherDisplay
Main container orchestrating all weather components with logo and footer.

**Styled Components:**
- `Container` - Full-screen flex layout
- `Logo` - Top-left branding
- `LogoIcon` - WeatherFit icon
- `LogoText` - "WeatherFit" text
- `Footer` - Bottom timestamp

## Services

### weatherService.ts
Integrates with weather API to fetch:
- Current temperature and feels-like
- Weather condition and icon
- Humidity, precipitation, wind speed
- Location name and local time

### aiService.ts
Generates outfit recommendations based on:
- Current temperature
- Weather condition
- Time of day

## Scripts

```bash
# Install dependencies
yarn install

# Start development server (http://localhost:5173)
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Type check
yarn tsc
```

## Build Output

**Production build generates:**
- **CSS**: ~1.40 KB (~0.53 KB gzipped) - Minimal CSS with Tailwind spacing scale + design tokens
- **JS**: ~473 KB (~127 KB gzipped) - React app bundle

The CSS includes:
- Complete Tailwind spacing scale (38 values: 0 to 96)
- Full typography scale (13 font sizes)
- Minimal CSS reset
- Zero utility classes (all styling in styled-components)

## CSS Architecture Philosophy

### Why This Approach?

1. **No Utility Class Bloat**: Unlike pure Tailwind, we don't generate thousands of unused utility classes
2. **Design Token Consistency**: All spacing and typography uses the same scale across the entire app
3. **Clean JSX**: No long className strings cluttering components
4. **Type Safety**: Styled-components are TypeScript-compatible
5. **Readable Code**: Semantic component names make code self-documenting

### Example Comparison

**Before (Pure Tailwind):**
```tsx
<div className="flex flex-col items-center justify-center h-full p-4 md:p-6 lg:p-8 text-center">
  <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-5 lg:mb-6 text-white">Error</h2>
  <p className="text-xl md:text-2xl lg:text-3xl opacity-80 text-white">{message}</p>
</div>
```

**After (Styled-Components + Design Tokens):**
```tsx
<S.Container>
  <S.ErrorTitle>Error</S.ErrorTitle>
  <S.ErrorMessage>{message}</S.ErrorMessage>
</S.Container>
```

## Best Practices

### When Adding New Components

1. Create component folder in `src/components/`
2. Create `ComponentName.tsx` for logic
3. Create `ComponentNameStyled.tsx` for styles
4. Add file-level JSDoc comment in styled file
5. Document each styled component with inline comments
6. **Use responsive units from Tailwind's spacing scale**:
   - Widths/heights: `var(--spacing-12)`, `var(--spacing-16)`, etc.
   - Flexible spacing: `calc(var(--spacing-unit) * N)`
7. Use `var(--font-size-*)` for all typography (rem-based)
8. Use `em` units for text-shadow (scales with font size)
9. Follow mobile-first responsive approach

### When Adding New Styles

1. **Prefer Tailwind spacing scale** (`--spacing-1` through `--spacing-96`) over hardcoded pixels
2. Use `rem` for all sizes (width, height, padding, margin, border-radius)
3. Use `em` for properties that should scale with font size (text-shadow, letter-spacing)
4. If you need a custom value, add it to `index.css` :root using `rem` units
5. Keep spacing consistent with Tailwind's 4px base increment
6. Maintain the typography scale for all text sizes

## Maintenance

### To Update Spacing Scale
Edit `--spacing-unit` in `src/index.css`:
```css
--spacing-unit: 0.25rem; /* Change to 0.5rem for larger spacing */
```

### To Update Typography Scale
Edit font size variables in `src/index.css`:
```css
--font-size-base: 1rem;     /* Change to 1.125rem for larger base font */
```

### To Update Breakpoints
Find and replace across all `*Styled.tsx` files:
```css
@media (min-width: 768px)   /* Tablet */
@media (min-width: 1366px)  /* Desktop */
```

## Performance Notes

- **CSS bundle is 84% smaller** than initial pure Tailwind approach (8.49KB → 1.40KB)
- Only necessary CSS is generated (no unused utility classes)
- Styled-components are tree-shaken in production builds
- CSS variables have near-zero runtime cost
- Using `rem` units improves performance (browser calculates sizes once)
- Responsive units enable better caching and smaller bundle sizes

## Additional Resources

- [Styled Components Documentation](https://styled-components.com/)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Tailwind CSS Design Tokens](https://tailwindcss.com/docs/customizing-colors)
- [Mobile-First Responsive Design](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first)
