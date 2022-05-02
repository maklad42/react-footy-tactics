import React from 'react';
import styled from 'styled-components';
import Player from './Player';
import ballImg from '../images/ball.png';

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
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
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
        <Player clr="blue" typ="player" key="b1" />
        <Player clr="blue" typ="player" key="b2" />
        <Player clr="red" typ="player" key="r1" />
        <Player clr="red" typ="player" key="r2" />
        <Player clr="white" typ="ball" key="w1" />
      </div>
    </BenchStyles>
  );
}

export default Bench;
