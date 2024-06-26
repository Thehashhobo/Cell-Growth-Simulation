# Project Overview
The Cell Growth Simulation project is an interactive web application that simulates the growth of bacterial cells on a grid. Users can toggle the state of individual cells and start or pause the simulation to observe the growth pattern over time. The application provides visual feedback on the number of new cells added per cycle and charts the growth data dynamically.
## Features
- Real-time interactive grid to toggle cell states
- Start, pause, and reset simulation controls
- Adjustable simulation parameters such as grid size and growth interval
- Dynamic chart for visualization of growth data

# Setup and Run Instructions

# Project Structure
### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [npm](https://www.npmjs.com/) (v9.x or later)

### Installation
1. Clone the repository to your local machine: 
`git clone https://github.com/your-username/cell-growth-simulation.git`
Navigate to the project directory, need to cd twice. 
`cd cell-growth-simulation`
2. Install Dependencies
`npm install`
3. Start the development server: Open your browser and navigate to http://localhost:3000 to view the application.
`npm start`
# Project Structure
The project is organized into the following the src folder: 
#### components folder: Contains the React components for the application.
- Cell.tsx: The component representing individual cells on a grid.
- Grid.tsx: The component responsible for rendering the grid and handling cell state toggling.
- Controls.tsx: The component that provides control buttons and input fields to interact with the simulation.
- Simulation.tsx: Contains the simulation logic including the state and effect hooks for managing the grid, interval, and cell growth.
App.tsx: The main component in src that sets up the layout and integrates other components.

# Assumptions
The grid is initialized with a default size of 20x20 and a default interval of 1000ms. The simulation assumes all cells start in an unoccupied state. Occupied cells will grow to all unoccupied neighbours.
# Additional Features
Added a dynamic SVG chart to display the growth data over time. This includes interactive elements to update the grid size and simulation interval.

# Performance analysis
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
