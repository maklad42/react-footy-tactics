import React from 'react';
import { useDrag } from 'react-dnd';

function Player({ clr }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'player',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    // eslint-disable-next-line prettier/prettier
    <div
      ref={drag}
      className={`player ${clr}`}
      style={{ border: isDragging ? '5px solid pink' : '0px' }}
    />
  );
}

export default Player;
