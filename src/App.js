import React from 'react';
import './App.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Bench from './components/Bench';
import Pitch from './components/Pitch';
// import movies from './data';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main>
        <Bench />
        <Pitch />
      </main>
    </DndProvider>
  );
}

export default App;
