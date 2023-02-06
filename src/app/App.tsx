import React from 'react';
import {Nav} from './components/Nav'
import {Experiences} from './components/pages/Experiences'
import {Hobbies} from './components/pages/Hobbies'
import {MiniProject} from './components/pages/MiniProject'
import {Intro} from './components/pages/Intro'
import '../styles/components/app.scss'

function App() {
  return (
    <div className="o-app">
      <Nav/>
     <Intro/>
     <Experiences/>
     <Hobbies/>
     <MiniProject/>
    </div>
  );
}

export default App;
