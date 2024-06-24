import React, { useState, useEffect, useRef } from 'react';

const createEmptyGrid = (width: number, height: number): boolean[][] =>
  Array.from({ length: height }, () => Array(width).fill(false));

const Simulation = (initialWidth: number = 20, initialHeight: number = 20, initialInterval: number) => {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [interval, setInterval] = useState(initialInterval);
  const [grid, setGrid] = useState<boolean[][]>(createEmptyGrid(width, height));
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | undefined>(undefined);

  const toggleCellState = (row: number, col: number) => {
    const newGrid = grid.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? !cell : cell
      )
    );
    setGrid(newGrid);
  };

  const simulateStep = () => {
    const newGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        if (!cell) {
          const neighbors = [
            [rowIndex - 1, colIndex],
            [rowIndex + 1, colIndex],
            [rowIndex, colIndex - 1],
            [rowIndex, colIndex + 1]
          ];
          return neighbors.some(
            ([r, c]) =>
              r >= 0 &&
              r < height &&
              c >= 0 &&
              c < width &&
              grid[r][c]
          );
        }
        return cell;
      })
    );
    setGrid(newGrid);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(simulateStep, interval);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, interval, grid]);

  const startPauseSimulation = () => {
    setIsRunning(!isRunning);
  };

  const resetSimulation = () => {
    setGrid(createEmptyGrid(width, height));
    setIsRunning(false);
  };

  const updateGridSize = (newWidth: number, newHeight: number) => {
    setWidth(newWidth);
    setHeight(newHeight);
    setGrid(createEmptyGrid(newWidth, newHeight));
  };

  return {
    grid,
    isRunning,
    width,
    height,
    interval,
    toggleCellState,
    startPauseSimulation,
    resetSimulation,
    setInterval,
    updateGridSize
  };
};

export default Simulation;
