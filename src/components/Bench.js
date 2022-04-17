import React from 'react';
import styled from 'styled-components';

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

  .player {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: blue;
    cursor: pointer;
  }
`;

function Bench() {
  return (
    <BenchStyles>
      <h2>Bench Warmers</h2>
      <div className="player-discs">
        <div className="player blue" />
        <div className="player blue" />
        <div className="player red" />
        <div className="player red" />
      </div>
    </BenchStyles>
  );
}

export default Bench;
