import React from 'react';
import {ExperiencePage} from './components/pages/ExperiencePage'
import {HobbiesPage} from './components/pages/HobbiesPage'
import {MiniProjectPage} from './components/pages/MiniProjectPage'
import '../styles/components/app.scss'

function App() {
  return (
    <div className="App">
     <ExperiencePage/>
     <HobbiesPage/>
     <MiniProjectPage/>
    </div>
  );
}

export default App;
