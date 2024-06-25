import React, { useState } from 'react';

export type ControlsProps = {
  isRunning: boolean;
  width: number;
  height: number;
  onStartPause: () => void;
  onReset: () => void;
  onIntervalChange: (interval: number) => void;
  onGridSizeChange: (newWidth: number, newHeight: number) => void;
};

const Controls: React.FC<ControlsProps> = ({
  isRunning,
  width,
  height,
  onStartPause,
  onReset,
  onIntervalChange,
  onGridSizeChange
}) => {
  const [interval, setInterval] = useState(1000);
  const [newWidth, setNewWidth] = useState(width);
  const [newHeight, setNewHeight] = useState(height);

  const handleIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInterval = Number(e.target.value);
    setInterval(newInterval);
    onIntervalChange(newInterval);
  };

  const handleGridSizeChange = () => {
    onGridSizeChange(newWidth, newHeight);
  };

  return (
    <div className="controls">
      <button onClick={onStartPause}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={onReset}>Reset</button>
      <input
        type="number"
        value={interval}
        onChange={handleIntervalChange}
        placeholder="Interval (ms)"
      />
      <input
        type="number"
        value={newWidth}
        onChange={(e) => setNewWidth(Number(e.target.value))}
        placeholder="Width"
      />
      <input
        type="number"
        value={newHeight}
        onChange={(e) => setNewHeight(Number(e.target.value))}
        placeholder="Height"
      />
      <button onClick={handleGridSizeChange}>Update Grid Size</button>
    </div>
  );
};

export default Controls;