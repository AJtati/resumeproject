# Ajith Thati Personal Website

This project is a modern, responsive, and interactive personal portfolio and resume website built with React. It's designed to showcase skills and experience in a clean, elegant, and user-friendly manner, providing a seamless single-page application (SPA) experience.

## Core Technologies

*   **React:** A JavaScript library for building user interfaces.
*   **React Router DOM:** For declarative routing within the application, enabling navigation between different sections.
*   **React Transition Group:** Used to manage component mounting and unmounting animations, creating smooth transitions between pages/sections.
*   **CSS3:** For styling, layout, responsiveness, and animations.

## Project Structure and Components

The project follows a component-based architecture, breaking down the UI into reusable and manageable pieces.

*   **`src/App.js`**: 
    *   This is the main entry point of the application.
    *   It sets up the global routing using `React Router DOM`.
    *   Manages the persistent global navigation (header) and footer, ensuring they are always visible.
    *   Orchestrates page transitions using `React Transition Group`, providing smooth visual effects when navigating between the main sections (Landing, About Me, CV).
    *   Handles the state and logic for the mobile hamburger menu.

*   **`src/components/LandingPage.js`**: 
    *   Represents the initial view of the website.
    *   Features a dynamic background image (`landingpage.jpg`) with a subtle animated gradient overlay.
    *   Displays the main title and a descriptive subtitle with elegant text reveal animations.
    *   Contains the primary navigation buttons that link to other sections of the website.

*   **`src/components/AboutMe.js`**: 
    *   Dedicated to presenting information about Ajith Thati.
    *   Features its own background image (`summary-background.jpg`).
    *   The content is presented within a semi-transparent grey box for readability.

*   **`src/CV.js`**: 
    *   Displays the comprehensive resume content..
    *   Uses `skills-background.jpg` as its primary background image.
    *   Unlike a traditional multi-page CV, all sections (Summary, Experience, Skills, Education) are rendered sequentially, allowing for a continuous, "liquid flow" scrolling experience.

*   **`src/components/Summary.js`**: 
    *   A sub-component of `CV.js`.
    *   Presents a concise overview of professional experience and skills.

*   **`src/components/Experience.js`**: 
    *   A sub-component of `CV.js`.
    *   Details work history, responsibilities, and achievements.

*   **`src/components/Skills.js`**: 
    *   A sub-component of `CV.js`.
    *   Lists technical proficiencies and tools.

*   **`src/components/Education.js`**: 
    *   A sub-component of `CV.js`.
    *   Outlines academic qualifications.

*   **`src/assets/`**: 
    *   This directory stores all static assets, primarily images (`landingpage.jpg`, `summary-background.jpg`, `skills-background.jpg`, `education-background.jpg`) used throughout the website.

*   **`src/App.css`**: 
    *   The central stylesheet for the entire application.
    *   Defines global styles, typography (using Google Fonts - Montserrat), and color schemes.
    *   Implements responsive design using CSS media queries to ensure adaptability across various screen sizes (desktop, tablet, mobile).
    *   Contains keyframe animations for subtle visual effects and page transitions.
    *   Styles the persistent global header, footer, and the mobile hamburger menu.

## Development Methodology and Design Principles

*   **Component-Based Architecture:** Leveraging React's component model for modularity, reusability, and easier maintenance. Each distinct UI element or section is encapsulated within its own component.
*   **Single-Page Application (SPA) Experience:** The website is designed to feel like a fluid, continuous experience rather than traditional page reloads. This is achieved through:
    *   **Client-Side Routing:** `React Router DOM` handles navigation without full page refreshes.
    *   **Smooth Transitions:** `React Transition Group` creates elegant fade and slide animations between different views, enhancing the SPA feel.
    *   **Persistent Navigation:** The global header and footer remain fixed, providing constant access to navigation and branding.
*   **Responsive Design (Mobile-First Approach):** The design prioritizes adaptability across all devices.
    *   **Fluid Layouts:** Extensive use of `flexbox` and percentage-based widths for flexible content arrangement.
    *   **Media Queries:** CSS media queries are strategically used to adjust layouts, font sizes, and component visibility (e.g., hamburger menu) for optimal viewing on different screen sizes (e.g., 320px, 375px, 414px, 768px, etc.).
    *   **Touch-Friendly Elements:** Buttons and interactive elements are designed with sufficient tap targets for mobile usability.
*   **Minimalist & Elegant UI:** A strong emphasis on clean lines, ample whitespace, and a refined aesthetic.
    *   **Subtle Animations:** Animations are used sparingly and purposefully to enhance user engagement without being distracting.
    *   **Refined Typography:** The choice of Montserrat font and careful letter-spacing contributes to a modern and professional look.
    *   **Dark Theme:** A consistent dark theme with transparent overlays ensures readability and a sophisticated feel.
*   **Iterative Development:** The project has evolved through iterative refinements based on user feedback, demonstrating flexibility and continuous improvement in design and functionality.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting/#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting/#npm-run-build-fails-to-minify)
