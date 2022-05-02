/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import pitchImg from '../images/pitch.jpg';
import ballImg from '../images/ball.png';
import PlayerCopy from './PlayerCopy';

const PitchStyles = styled.div`
  background-color: #637b63;
  background-image: url(${pitchImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  .player,
  .ball {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .player.copy,
  .ball {
    position: absolute;
  }

  .player.blue {
    background-color: blue;
  }

  .player.red {
    background-color: red;
  }

  .ball {
    background-image: url(${ballImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
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

  const addPlayerToPitch = (clr, typ) => {
    console.log({ clr, typ });
    setPitch((oldPitch) => [...oldPitch, [clr, typ]]);
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'player',
    drop: (item) => addPlayerToPitch(item.clr, item.typ),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  return (
    <PitchStyles ref={drop}>
      {pitch.map((player, id) => (
        <PlayerCopy clr={player[0]} typ={player[1]} key={id} draggable />
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
