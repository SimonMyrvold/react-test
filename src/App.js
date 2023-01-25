import './App.css';
import React from 'react';
import Villa from './BuildType/Villa';
import Bostad from './BuildType/Bostad';
import { useState } from "react"


export default function App() {
  
  const [settings, setSettings] = useState(
    <>  
    <br />
    <h2>Välj Bostadtyp</h2>
    </>
  );

  function blockUnblock(type){
    if(type === 'block'){
      setSettings(<Bostad />);
      document.getElementById('bostad').style.color = "red";
      document.getElementById('villa').style.color = "white";
    }else{
      setSettings(<Villa />);
      document.getElementById('villa').style.color = "red";
      document.getElementById('bostad').style.color = "white";
    }

  }

  return (
    <div className="App">
      <header className="App-header">

                <h2 id='bostad' className="pt-2" style={{ color: 'white' }} onClick={() => blockUnblock('block')}>Bostadrätt</h2>
                <h2 id='villa' className="pt-2" style={{ color: 'white' }} onClick={() => blockUnblock('unblock')}>Villa</h2>

        <div>{settings}</div>




      </header>
    </div>
  );
}

