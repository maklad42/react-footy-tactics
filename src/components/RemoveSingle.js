import React from 'react';
import { useDrop } from 'react-dnd';

function RemoveSingle() {
  const goodbye = () => {
    console.log('See ya!');
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'playercopy',
    drop: (item, monitor) => {
      goodbye();
      console.log('gone!');
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className="clearSingle">
      Remove Player
    </div>
  );
}

export default RemoveSingle;
