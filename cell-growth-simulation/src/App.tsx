import React from 'react';
import Grid from './components/Grid';
import Controls, { ControlsProps } from './components/Controls';
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
    toggleCellState,
    startPauseSimulation,
    resetSimulation,
    setInterval,
    updateGridSize
  } = useSimulation(20, 20, initialInterval);

  return (
    <div className="app">
      <Grid grid={grid} onCellClick={toggleCellState} />
      <Controls
        isRunning={isRunning}
        width={width}
        height={height}
        onStartPause={startPauseSimulation}
        onReset={resetSimulation}
        onIntervalChange={setInterval}
        onGridSizeChange={updateGridSize}
      />
      <div className="info">
        New cells added per cycle: {newCellsCount}
      </div>
    </div>
  );
};

export default App;
