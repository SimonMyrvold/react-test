import './App.css';
import React from 'react';
import Villa from './BuildType/Villa';
import Bostad from './BuildType/Bostad';
import { useState } from "react"


export default function App() {
  
  const [settings, setSettings] = useState(
    <h1>Välj Bostadtyp</h1>
  );

  function blockUnblock(type){
    if(type === 'block'){
      document.getElementById('unblock').checked = false;
      setSettings(<Bostad />);
    }else{
      document.getElementById('block').checked = false;
      setSettings(<Villa />);
    }

  }

  return (
    <div className="App">
      <header className="App-header">

                <h2 className="pt-2">Bostadrätt</h2>
                <input type="checkbox" className="rounded-full" id="block" onChange={() => blockUnblock('block')}/>
                <h2 className="pt-2">Villa</h2>
                <input type="checkbox" classame="rounded-full" id="unblock" onChange={() => blockUnblock('unblock')}/>

        <div>{settings}</div>


      </header>
    </div>
  );
}

