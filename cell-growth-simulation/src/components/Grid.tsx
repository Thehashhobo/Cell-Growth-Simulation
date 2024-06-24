import React from 'react';
import Cell from './Cell';
import './Grid.css';

interface GridProps {
  grid: boolean[][];
  onCellClick: (row: number, col: number) => void;
}

const Grid: React.FC<GridProps> = ({ grid, onCellClick }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((isOccupied, colIndex) => (
            // For each cell, a Cell component is created with a unique key (colIndex)
            <Cell
              key={colIndex}
              isOccupied={isOccupied}
              onClick={() => onCellClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
