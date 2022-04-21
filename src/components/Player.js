import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

const PlayerStyles = styled.div`
  .player {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .player.blue {
    background-color: blue;
  }

  .player.red {
    background-color: red;
  }
`;

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
    <PlayerStyles
      ref={drag}
      className={`player ${clr}`}
      key={id}
      style={{ border: isDragging ? '5px solid pink' : '0px' }}
    />
  );
}

export default Player;
