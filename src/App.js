// This line should be there as shows
import React, { Component }  from 'react';
import { useEffect } from 'react';
import './App.css';
import Video from "./components/Video";
import Videooo from "./components/Videooo";
import Videoo from "./components/Videoo";
import Videoooo from "./components/Videoooo";
function App() {
  useEffect(()=>{
  document.getElementById("focus").focus()
  }, [])
  return (
    <div id='focus' taibindex="1" className='flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden'>
       <Video/>
       <Videoo/>
       <Videooo/>
       <Videoooo/>
    </div>
  );
}

export default App;
