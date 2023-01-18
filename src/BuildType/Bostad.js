import React from 'react';
import { useState } from "react"


export default function Bostad() {

        const [ state, setState ] = React.useState({
            ar: 1,
            inkopspris: 1,
            kontantinsats: 1,
            ranta: 1,
            avgift: 1,
            ovrigt: 1,
        });

        const [ totalt, setTotalt ] = React.useState();

        function ChangeState(){
            setState({
                ar: document.getElementById('ar').value,
                inkopspris: document.getElementById('inkopspris').value,
                kontantinsats: document.getElementById('kontantInsats').value,
                ranta: document.getElementById('ranta').value,
                avgift: document.getElementById('avgift').value,
                ovrigt: document.getElementById('ovrigt').value,
            })
            Calculate();
        }

        function Calculate(){
            let ar = state.ar;
            let inkopspris = state.inkopspris;
            let kontantinsats = state.kontantinsats;
            let ranta = state.ranta;
            let avgift = state.avgift;
            let ovrigt = state.ovrigt;

            let totaltpermonth = (inkopspris - kontantinsats)/(ar*12);
            let totalt = parseInt((parseInt(totaltpermonth * (1 + ranta/100))) + parseInt(avgift) + parseInt(ovrigt));
            if (kontantinsats / inkopspris < 0.15) {
                document.getElementById('totalt').style.color = "red";
                let warningMessage = "Kontantinsats är mindre än 15% av inköpspriset " + (Math.floor(totalt)).toString();
                setTotalt(warningMessage.toString());
            } else {
                setTotalt(Math.floor(totalt));
                document.getElementById('totalt').style.color = "white";
            }
        }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Bostadsrätt</h1>

            <div className="mt-4">
                <h4 className="text-center">År: {state.ar}</h4>
                <input id='ar' type="range" value={state.ar} step="1" className="appearance-none rounded-full w-full mt-4" min="0" max="30" onChange={() => ChangeState()}/>
            </div>

            <div className="mt-4">
                <h4 className="text-center">Inköpspris: {state.inkopspris} kr</h4>
                <input id='inkopspris' type="range" value={state.inkopspris} step="25000" className="appearance-none rounded-full w-full mt-4" min="0" max="20000000" onChange={() => ChangeState()}/>
            </div>

            <div className="mt-4">
                <h4 className="text-center">Kontantinsats: {state.kontantinsats} kr</h4>
                <input id='kontantInsats' type="range" value={state.kontantinsats} step="10000" className="appearance-none rounded-full w-full  mt-4" min="0" max={state.inkopspris} onChange={() => ChangeState()}/>
            </div>

            <div className="mt-4">
                <h4 className="text-center">Ränta: {state.ranta} %</h4>
                <input id='ranta' type="range" value={state.ranta} step="0.1" className="appearance-none rounded-full w-full  mt-4" min="0" max="15" onChange={() => ChangeState()}/>
            </div>

            <div className="mt-4">
                <h4 className="text-center">Avgift: {state.avgift} kr</h4>
                <input id='avgift' type="range" value={state.avgift} step="100" className="appearance-none rounded-full w-full  mt-4" min="0" max="25000" onChange={() => ChangeState()}/>
            </div>

            <div className="mt-4">
                <h4 className="text-center">Övrigt: {state.ovrigt} kr</h4>
                <input id='ovrigt' type="range" value={state.ovrigt} step="100" className="appearance-none rounded-full w-full  mt-4" min="0" max="25000" onChange={() => ChangeState()}/>
            </div>

            <h1 id='totalt' className=''>{totalt}kr /mån</h1>

      </header>
    </div>
  );
}
