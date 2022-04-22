import React from 'react';
import { useDrag } from 'react-dnd';

function Player({ clr, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'player',
    item: { clr },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    // eslint-disable-next-line prettier/prettier
    <div
      ref={drag}
      className={`player copy ${clr}`}
      draggable
      key={id}
      style={{ border: isDragging ? '5px solid pink' : '0px' }}
    />
  );
}

export default Player;
