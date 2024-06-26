import React from 'react';

interface CellProps {
  isOccupied: boolean;
  onClick: () => void;
}
// represents individual cells on a grid
const Cell: React.FC<CellProps> = ({ isOccupied, onClick }) => {
  return (
     <div
     className={`cell ${isOccupied ? 'occupied' : ''}`}
     onClick={onClick}
   ></div>
  );
};

export default Cell;