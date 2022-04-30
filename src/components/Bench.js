import React from 'react';
import styled from 'styled-components';
import Ball from './Ball';
import Player from './Player';
import ballImg from '../images/ball.png;';

const BenchStyles = styled.div`
  background-color: #879ba8;
  border-right: solid 5px blue;

  .player-discs {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
  }

  .player,
  .ball {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .ball {
    background-image: url(${ballImg});
  }

  .player.blue {
    background-color: blue;
  }

  .player.red {
    background-color: red;
  }
`;

function Bench() {
  return (
    <BenchStyles>
      <h2>Bench Warmers</h2>
      <div className="player-discs">
        <Player clr="blue" key="b1" />
        <Player clr="blue" key="b2" />
        <Player clr="red" key="r1" />
        <Player clr="red" key="r2" />
        <Ball />
      </div>
    </BenchStyles>
  );
}

export default Bench;
