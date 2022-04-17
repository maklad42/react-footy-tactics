import React from 'react';
import styled from 'styled-components';
import pitchImg from '../images/pitch.jpg';

const PitchStyles = styled.div`
  background-color: #637b63;
  background-image: url(${pitchImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

function Pitch() {
  return <PitchStyles />;
}

export default Pitch;
