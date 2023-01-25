import React from 'react';
import { useState } from "react"


export default function Villa() {

        const [ state, setState ] = React.useState({
            ar: 1,
            inkopspris: 1,
            kontantinsats: 1,
            ranta: 1,
            vatten: 1,
            el: 1,
            sopor: 1,
            varme: 1
        });

        const [ totalt, setTotalt ] = React.useState();

        function ChangeState(){
            setState({
                ar: document.getElementById('ar').value,
                inkopspris: document.getElementById('inkopspris').value,
                kontantinsats: document.getElementById('kontantInsats').value,
                ranta: document.getElementById('ranta').value,
                vatten: document.getElementById('vatten').value,
                el: document.getElementById('el').value,
                sopor: document.getElementById('sopor').value,
                varme: document.getElementById('varme').value
            })
            Calculate();
        }

        function Calculate(){
            let ar = state.ar;
            let inkopspris = state.inkopspris;
            let kontantinsats = state.kontantinsats;
            let ranta = state.ranta;
            let vatten = state.vatten;
            let el = state.el;
            let sopor = state.sopor;
            let varme = state.varme;

            console.log(1 + ranta/100);

            let totaltpermonth = (inkopspris - kontantinsats)/(ar*12);
            let totalt = parseInt((parseInt(totaltpermonth * (1+ ranta/100))));
            let extracost = totalt + + parseInt(vatten) + parseInt(el) + parseInt(sopor) + parseInt(varme);
            if (kontantinsats / inkopspris < 0.15) {
                document.getElementById('totalt').style.color = "red";
                let warningMessage = "Kontantinsats är mindre än 15% av inköpspriset " + (Math.floor(totalt)).toString();
                setTotalt(warningMessage.toString());
            } else {
                setTotalt(Math.floor(extracost));
                document.getElementById('totalt').style.color = "white";
            }
        }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Villa</h1>

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
                <h4 className="text-center">Vatten: {state.vatten} kr</h4>
                <input id='vatten' type="range" value={state.vatten} step="100" className="appearance-none rounded-full w-full  mt-4" min="0" max="25000" onChange={() => ChangeState()}/>
            </div>

            <div className="mt-4">
                <h4 className="text-center">El: {state.el} kr</h4>
                <input id='el' type="range" value={state.el} step="100" className="appearance-none rounded-full w-full  mt-4" min="0" max="25000" onChange={() => ChangeState()}/>
            </div>

            <div className="mt-4">
                <h4 className="text-center">Sopor: {state.sopor} kr</h4>
                <input id='sopor' type="range" value={state.sopor} step="100" className="appearance-none rounded-full w-full  mt-4" min="0" max="25000" onChange={() => ChangeState()}/>
            </div>

            <div className="mt-4">
                <h4 className="text-center">Värme: {state.varme} kr</h4>
                <input id='varme' type="range" value={state.varme} step="100" className="appearance-none rounded-full w-full  mt-4" min="0" max="25000" onChange={() => ChangeState()}/>
            </div>

            <h1 id='totalt' className=''>{totalt}kr /mån</h1>

      </header>
    </div>
  );
}
