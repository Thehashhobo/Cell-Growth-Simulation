# Project Overview
The Cell Growth Simulation project is an interactive web application that simulates the growth of bacterial cells on a grid. Users can toggle the state of individual cells and start or pause the simulation to observe the growth pattern over time. The application provides visual feedback on the number of new cells added per cycle and charts the growth data dynamically.
## Features
- Real-time interactive grid to toggle cell states
- Start, pause, and reset simulation controls
- Adjustable simulation parameters such as grid size and growth interval
- Dynamic chart for visualization of growth data

# Setup and Run Instructions

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [npm](https://www.npmjs.com/) (v9.x or later)

### Installation
1. Clone the repository to your local machine: 
`git clone https://github.com/your-username/cell-growth-simulation.git`
2. Navigate to the project directory. 
`cd cell-growth-simulation`
3. Install Dependencies
`npm install` \
Note that warnings from deprecated dependencies can be safely ignore due to simiplicity of this project 
4. Start the development server: Open your browser and navigate to http://localhost:3000 to view the application.
`npm start`
# Project Structure
The project is organized into the src folder: 
### components folder: Contains the React components for the application.
- Cell.tsx: The component representing individual cells on a grid.
- Grid.tsx: The component responsible for rendering the grid and handling cell state toggling.
- Controls.tsx: The component that provides control buttons and input fields to interact with the simulation.
- Simulation.tsx: Contains the simulation logic including the state and effect hooks for managing the grid, interval, and cell growth. \
App.tsx: The main component in src that sets up the layout and integrates other components.

# Assumptions
The grid is initialized with a default size of 20x20 and a default interval of 1000ms. The simulation assumes all cells start in an unoccupied state. Occupied cells will grow to all unoccupied neighbours.
# Additional Features
Added a dynamic SVG chart to display the growth data over time. This includes interactive elements to update the grid size and simulation interval.

# Performance analysis
# Getting Started with Create React App

