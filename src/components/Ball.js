import React from 'react';
import { useDrag } from 'react-dnd';

function Ball() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ball',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    // eslint-disable-next-line prettier/prettier
    <div ref={drag} className="ball" draggable />
  );
}

export default Ball;
