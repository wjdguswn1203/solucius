import logo from './logo.svg';
import React from 'react';
import './App.css';

import "primereact/resources/themes/lara-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import {Button} from "primereact/button";

function App() {
  return (
    <div className="App">
        <div className="flex flex-column md:flex-row justify-content-between my-5">
            <Button type="button" label="Button 1" className="mb-3 md:mb-0"></Button>
            <Button type="button" label="Button 2" className="p-button-secondary mb-3 md:mb-0"></Button>
            <Button type="button" label="Button 3" className="p-button-help"></Button>
        </div>
    </div>
  );
}

export default App;
