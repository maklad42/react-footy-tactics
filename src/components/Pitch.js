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
`;

function Pitch() {
  const [field, setField] = useState([]);

  const addPlayerToPitch = (clr) => {
    console.log(clr);
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'player',
    drop: (item) => addPlayerToPitch(item.clr),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  return <PitchStyles ref={drop} />;
}

export default Pitch;
