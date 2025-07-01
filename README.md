# Ajith Thati Personal Website

This project is a modern, responsive, and interactive personal portfolio and resume website built with React. It's designed to showcase skills and experience in a clean, elegant, and user-friendly manner, providing a seamless single-page application (SPA) experience.

## Core Technologies

*   **React:** A JavaScript library for building user interfaces.
*   **React Router DOM:** For declarative routing within the application, enabling navigation between different sections.
*   **Tailwind CSS:** A utility-first CSS framework used for rapid, consistent, and highly customizable styling, contributing to a modern and lightweight design.
*   **Framer Motion:** A powerful and easy-to-use animation library for React, used for creating smooth, performant, and visually appealing transitions and interactive elements.

## Project Structure and Components

The project follows a component-based architecture, breaking down the UI into reusable and manageable pieces.

*   **`src/App.js`**: 
    *   This is the main entry point of the application.
    *   It sets up the global routing using `React Router DOM`.
    *   Manages the persistent global navigation (header) and footer, ensuring they are always visible.
    *   Orchestrates page transitions using `Framer Motion`, providing smooth visual effects when navigating between the main sections.
    *   Handles the state and logic for the mobile hamburger menu.
    *   Sets the `landingpage.jpg` as the default background for the entire application, visible during page transitions.
    *   Includes a `useEffect` hook to scroll the window to the top on every route change.

*   **`src/components/LandingPage.js`**: 
    *   Represents the initial view of the website.
    *   Features a dynamic background image (`landingpage.jpg`) with a subtle animated grey gradient overlay.
    *   Displays the main title and a descriptive subtitle with elegant text reveal animations.

*   **`src/components/AboutMe.js`**: 
    *   Dedicated to presenting information about Ajith Thati.
    *   Features its own background image (`summary-background.jpg`) with a subtle animated grey gradient overlay.
    *   The content is presented within a semi-transparent grey box for readability.

*   **`src/CV.js`**: 
    *   Displays the comprehensive resume content.
    *   Uses `skills-background.jpg` as its primary background image with a subtle animated grey gradient overlay.
    *   All sections (Experience, Skills, Education) are rendered sequentially, allowing for a continuous, "liquid flow" scrolling experience.

*   **`src/components/Experience.js`**: 
    *   A sub-component of `CV.js`.
    *   Details work history, responsibilities, and achievements.
    *   Refactored to use Tailwind CSS and Framer Motion.

*   **`src/components/Skills.js`**: 
    *   A sub-component of `CV.js`...
    *   Lists technical proficiencies and tools.
    *   Refactored to use Tailwind CSS and Framer Motion.

*   **`src/components/Education.js`**: 
    *   A sub-component of `CV.js`.
    *   Outlines academic qualifications.
    *   Refactored to use Tailwind CSS and Framer Motion.

*   **`src/components/SiteBuild.js`**: 
    *   Details the project implementation methods.
    *   Uses `education-background.jpg` as its primary background image with a subtle animated grey gradient overlay.
    *   Refactored to use Tailwind CSS and Framer Motion.
    *   URLs now wrap correctly in mobile view.

*   **`src/components/BottomNav.js`**: 
    *   Mobile-specific bottom navigation bar.
    *   Refactored to use Tailwind CSS and Framer Motion.

*   **`src/assets/`**: 
    *   This directory stores all static assets, primarily images (`landingpage.jpg`, `summary-background.jpg`, `skills-background.jpg`, `education-background.jpg`) used throughout the website.

*   **`src/App.css`**: 
    *   The central stylesheet for the entire application, now primarily composed of Tailwind CSS directives.
    *   Defines global styles and responsive design using Tailwind's utility classes.
    *   Contains keyframe animations for subtle visual effects.

*   **`src/index.css`**: 
    *   Imports Tailwind's base styles.

## Development Methodology and Design Principles

*   **Component-Based Architecture:** Leveraging React's component model for modularity, reusability, and easier maintenance. Each distinct UI element or section is encapsulated within its own component.
*   **Single-Page Application (SPA) Experience:** The website is designed to feel like a fluid, continuous experience rather than traditional page reloads. This is achieved through:
    *   **Client-Side Routing:** `React Router DOM` handles navigation without full page refreshes.
    *   **Smooth Transitions:** `Framer Motion` creates elegant fade and slide animations between different views, enhancing the SPA feel.
    *   **Persistent Navigation:** The global header and footer remain fixed, providing constant access to navigation and branding.
*   **Responsive Design (Mobile-First Approach):** The design prioritizes adaptability across all devices.
    *   **Tailwind CSS:** Utilizes Tailwind's responsive utility classes for fluid layouts and adaptive styling across various screen sizes.
    *   **Adjusted Mobile Layouts:** Sections on all pages are now positioned slightly higher in mobile view for better visibility.
*   **Modern & Elegant UI:** A strong emphasis on clean lines, ample whitespace, and a refined aesthetic.
    *   **Subtle Animations:** Animations are used sparingly and purposefully to enhance user engagement without being distracting.
    *   **Refined Typography:** The choice of Montserrat font and careful letter-spacing contributes to a modern and professional look.
    *   **Grey Theme:** A consistent grey theme with subtle gradient overlays ensures readability and a sophisticated feel.
*   **Lightweight and Performant:** Optimized for fast loading times and smooth interactions through efficient styling and animation libraries.
*   **Iterative Development:** The project has evolved through iterative refinements based on user feedback, demonstrating flexibility and continuous improvement in design and functionality.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run deploy`

Deploys the built application to GitHub Pages.