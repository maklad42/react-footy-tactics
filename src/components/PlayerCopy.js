import React from 'react';
import { useDrag } from 'react-dnd';
import Draggable from 'react-draggable';

function PlayerCopy({ clr, typ, id }) {
  const [, drag] = useDrag(() => ({
    type: 'playercopy',
    item: { clr, typ },
    // collect: (monitor) => ({
    //   isDragging: !!monitor.isDragging(),
    // }),
  }));

  const idx = Math.floor(Math.random() * 10000 + 1).toString(16);
  return (
    <Draggable>
      {/* eslint-disable-next-line prettier/prettier */}
      <div
        id={idx}
        className={`${typ} copy ${clr}`}
        // draggable
        key={id}
        ref={drag}
        // style={{ opacity: isDragging ? 0.5 : 1 }}
      />
    </Draggable>
  );
}

export default PlayerCopy;
