import React from 'react';
import Grid from './components/Grid';
import Controls from './components/Controls';
import useSimulation from './components/Simulation';
import './App.css';

const App: React.FC = () => {
  const initialInterval = 1000;
  const {
    grid,
    isRunning,
    width,
    height,
    newCellsCount,
    growthData,
    maxDataPoints,
    toggleCellState,
    startPauseSimulation,
    resetSimulation,
    setInterval,
    updateGridSize
  } = useSimulation(20, 20, initialInterval);
  const maxGrowthValue = Math.max(...growthData.slice(-maxDataPoints));

  return (
    <div className="app">
      <div className="banner">
        <div className="title">
          Cell Growth Simulation
        </div>
      </div>
      <div className="content">
        <div className="left-panel">
          <Grid grid={grid} onCellClick={toggleCellState} />
          

        </div>
        <div className="right-panel">
        <svg width="100%" height="200" viewBox="0 0 500 200">
            {/* Horizontal and Vertical Axes */}
            <line x1="0" y1="200" x2="500" y2="200" stroke="black" />
            <line x1="0" y1="0" x2="0" y2="200" stroke="black" />

            {/* Horizontal Labels */}
            <text x="250" y="195" textAnchor="middle" fontSize="12">Time</text>
            {Array.from({ length: 5 }, (_, i) => (
              <text key={i} x={(i / 4) * 500} y="215" textAnchor="middle" fontSize="10">
                {i * (maxDataPoints / 4)}
              </text>
            ))}

            {/* Vertical Labels */}
            <text x="5" y="10" textAnchor="start" fontSize="12">Growth</text>
            {Array.from({ length: 5 }, (_, i) => (
              <text key={i} x="-10" y={200 - (i / 4) * 200} textAnchor="end" fontSize="10">
                {(i * (maxGrowthValue / 4)).toFixed(0)}
              </text>
            ))}

            {/* Data Points */}
            {growthData.slice(-maxDataPoints).map((value: number, index: number) => (
              <circle
                key={index}
                cx={(index / maxDataPoints) * 500}
                cy={200 - (value / maxGrowthValue) * 200}
                r={3}
                fill="black"
              />
            ))}
          </svg>
          <div className="info">
            New cells added per cycle: {newCellsCount}
          </div>
          <Controls
            isRunning={isRunning}
            width={width}
            height={height}
            onStartPause={startPauseSimulation}
            onReset={resetSimulation}
            onIntervalChange={setInterval}
            onGridSizeChange={updateGridSize}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
