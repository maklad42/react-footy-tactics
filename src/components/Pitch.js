import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import pitchImg from '../images/pitch.jpg';
import PlayerCopy from './PlayerCopy';

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

  .player.copy {
    position: absolute;
  }

  .player.blue {
    background-color: blue;
  }

  .player.red {
    background-color: red;
  }

  .clearPitch {
    position: absolute;
    bottom: 0;
    height: 3rem;
    padding: 0.5rem;
    margin: 2rem;
    width: 10rem;
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: rgba(1, 1, 1, 0.3);
  }
`;

function Pitch() {
  const [pitch, setPitch] = useState([]);

  const clearPitch = () => {
    setPitch([]);
  };

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
        <PlayerCopy clr={player} key={id} draggable />
      ))}
      <div className="clearPitch">
        <button type="button" onClick={clearPitch}>
          Clear
        </button>
      </div>
    </PitchStyles>
  );
}

export default Pitch;
