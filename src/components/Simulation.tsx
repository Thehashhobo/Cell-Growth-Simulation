import { useState, useEffect, useRef, useCallback } from 'react';

const createEmptyGrid = (width: number, height: number): boolean[][] =>
  Array.from({ length: height }, () => Array(width).fill(false));

const Simulation = (initialWidth: number = 20, initialHeight: number = 20, initialInterval: number) => {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [interval, setInterval] = useState(initialInterval);
  const [grid, setGrid] = useState<boolean[][]>(createEmptyGrid(width, height));
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | undefined>(undefined);
  // useRef to avoid rerendering, potentialCells keeps track of occupied cells with growth potiental 
  const potentialCells = useRef<Set<string>>(new Set());
  // keeps track of growth rate
  const [newCellsCount, setNewCellsCount] = useState(0);
  // keeps track of all growth data for visualization
  const [growthData, setGrowthData] = useState<number[]>([]);
  // Limit number of data points to display
  const maxDataPoints = 50;

  const toggleCellState = (row: number, col: number) => {
    const neighbors = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1]
    ];
    // Create a shallow copies to maintan immutability
    const newGrid = [...grid];
    newGrid[row] = [...newGrid[row]];

    const cellKey = `${row},${col}`;
    
    // maintains potientalCells 
    if (newGrid[row][col]) {
      potentialCells.current.delete(cellKey);
      neighbors.forEach(([r, c]) => {
        if (r >= 0 && r < height && c >= 0 && c < width && grid[r][c]) {
          potentialCells.current.add(`${r},${c}`);
        }
      });
    } else {
      neighbors.some(([r, c]) => {
        if (r >= 0 && r < height && c >= 0 && c < width && !grid[r][c]) {
          potentialCells.current.add(cellKey);
          return true; // Ensure some() returns true if a condition is met
        }
        return false; // Ensure some() returns false if no condition is met
      });
    }

    newGrid[row][col] = !newGrid[row][col];
    
    // Update the grid state
    setGrid(newGrid);

  };

  // algorithm for growth of bacterial cell, potentialCells and refilled with new potentialCells every growth cycle
  const simulateStep = useCallback(() => {
    let newCellsAdded = 0;
    const newGrid = grid.map(row => row.slice()); 
    const newPotentialCells = new Set<string>();
  
    potentialCells.current.forEach(cellKey => {
      const [rowIndex, colIndex] = cellKey.split(',').map(Number);
  
      const neighbors = [
        [rowIndex - 1, colIndex],
        [rowIndex + 1, colIndex],
        [rowIndex, colIndex - 1],
        [rowIndex, colIndex + 1]
      ];

      neighbors.forEach(([r, c]) => {
        if (r >= 0 && r < height && c >= 0 && c < width && !newGrid[r][c]) {
          newGrid[r][c] = true;
          newPotentialCells.add(`${r},${c}`);
          newCellsAdded++;
        }
      });

      newGrid[rowIndex][colIndex] = true; // Mark the current cell as occupied
  
      // Remove the cell from potentialCells
      potentialCells.current.delete(cellKey);
    });
  
    // Update potentialCells with new potential cells
    potentialCells.current = newPotentialCells;
    setGrid(newGrid);
    setNewCellsCount(newCellsAdded);
  }, [grid, height, width]);
  


  useEffect(() => {
    if (isRunning) {
      setGrowthData((prevData) => [...prevData, newCellsCount]);
      intervalRef.current = window.setInterval(simulateStep, interval);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [newCellsCount, isRunning, interval, grid, simulateStep]);

  const startPauseSimulation = () => {
    setIsRunning(!isRunning);
  };

  const resetSimulation = () => {
    setGrid(createEmptyGrid(width, height));
    potentialCells.current = new Set();
    setIsRunning(false);
    setNewCellsCount(0);
    setGrowthData([]);
  };

  const updateGridSize = (newWidth: number, newHeight: number) => {
    setWidth(newWidth);
    setHeight(newHeight);
    setGrid(createEmptyGrid(newWidth, newHeight));
    potentialCells.current = new Set();
    setNewCellsCount(0);
    setGrowthData([]);
  };

  return {
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
  };
};

export default Simulation;
