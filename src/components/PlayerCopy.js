import React from 'react';

function PlayerCopy({ clr, id }) {
  return (
    // eslint-disable-next-line prettier/prettier
    <div className={`player ${clr}`} draggable key={id} />
  );
}

export default PlayerCopy;
