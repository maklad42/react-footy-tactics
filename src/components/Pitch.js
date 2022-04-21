import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import pitchImg from '../images/pitch.jpg';
import Player from './Player';

const PitchStyles = styled.div`
  background-color: #637b63;
  background-image: url(${pitchImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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

function Pitch() {
  const [pitch, setPitch] = useState([]);

  const addPlayerToPitch = (clr) => {
    console.log(clr);
    setPitch((oldPitch) => [...oldPitch, clr]);
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'player',
    drop: (item) => addPlayerToPitch(item.clr),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  return (
    <PitchStyles ref={drop}>
      {pitch.map((player, id) => (
        <Player clr={player} key={id} />
      ))}
    </PitchStyles>
  );
}

export default Pitch;
