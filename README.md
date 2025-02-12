# Cell Growth Simulation (Improved Version at [Cell Growth Simulation V2](https://github.com/Thehashhobo/Cell-Growth-Simulation-V2))
The Cell Growth Simulation project is an interactive web application that simulates the growth of bacterial cells on a grid. Users can toggle the state of individual cells and start or pause the simulation to observe the growth pattern over time. The application provides visual feedback on the number of new cells added per cycle and charts the growth data dynamically.

#### The website is hosted on github pages: https://thehashhobo.github.io/Cell-Growth-Simulation/

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
1. Clone the repository to your local machine: \
`git clone https://github.com/Thehashhobo/Cell-Growth-Simulation.git`
### Running the application
2. Navigate to the project directory: \
`cd cell-growth-simulation`
3. Install Dependencies(Note that warnings from deprecated dependencies can be safely ignore due to simplicity of this project): \
`npm install`
4. Start the development server: Open your browser and navigate to http://localhost:3000 to view the application: \
`npm start`
# Project Structure
The project is organized into the src folder: 
### components folder: Contains the React components for the application.
- Cell.tsx: The component representing individual cells on a grid.
- Grid.tsx: The component responsible for rendering the grid and handling cell state toggling.
- Controls.tsx: The component that provides control buttons and input fields to interact with the simulation.
- Simulation.tsx: Contains the simulation logic including the state and effect hooks for managing the grid, interval, and cell growth. 
- ErrorBoundary.tsx: The component used to wrap app, catches error anywhere in their child component tree, log those errors, and display a fallback UI. 
- App.tsx: The main component in src that sets up the layout and integrates other components. 

# Assumptions
The grid is initialized with a default size of 20x20 and a default interval of 1000ms. The simulation assumes all cells start in an unoccupied state. Occupied cells will grow to all unoccupied neighbours.
# Additional Features
- Added a dynamic SVG chart to display the growth data over time.
- Interactive elements to update the grid size
- Applications is accessible with aria-label on controls, particularly useful for screen reader users.
- keyboard navigation for controls (press tab to select buttons, press enter to confirm).  
# Performance analysis
Performance of the application measured with chrome’s built in dev-tool: [Lighthouse](https://github.com/GoogleChrome/lighthouse)
## Navigation
- Analyze accessibility immediately after page load
- Obtain a Lighthouse Performance score and all performance metrics.
- Assess Progressive Web App capabilities.
### Results
- Overall Score and test results from lighthouse\
![Screenshot of the application](https://github.com/Thehashhobo/Cell-Growth-Simulation/blob/main/Lighthouse_result/Nav1.PNG)
- Performance metric and results
![Screenshot of the application](https://github.com/Thehashhobo/Cell-Growth-Simulation/blob/main/Lighthouse_result/Nav2.PNG)
## Timespan
- Measure layout shifts and JavaScript execution time over a timerange, including user interactions.
- Discover performance opportunities to improve the experience for long-lived pages and SPAs.
### Results
- Performance metric and results from user interaction
![Screenshot of the application](https://github.com/Thehashhobo/Cell-Growth-Simulation/blob/main/Lighthouse_result/Time1.PNG)
- Work trace
![Screenshot of the application](https://github.com/Thehashhobo/Cell-Growth-Simulation/blob/main/Lighthouse_result/Time2.PNG)

#### Enviromental Data
![Screenshot of the application](https://github.com/Thehashhobo/Cell-Growth-Simulation/blob/main/Lighthouse_result/Nav3.PNG)
