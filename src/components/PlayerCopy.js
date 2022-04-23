import React from 'react';
import { useDrag } from 'react-dnd';

function PlayerCopy({ clr, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'playercopy',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const idx = Math.floor(Math.random() * 10000 + 1).toString(16);
  return (
    // eslint-disable-next-line prettier/prettier
    <div
      id={idx}
      className={`player ${clr}`}
      draggable
      key={id}
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    />
  );
}

export default PlayerCopy;
