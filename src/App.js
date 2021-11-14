import React from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Activities from './components/ParksNRec';
import Parks from './components/Parks';
import ParkStream from './components/ParkStream';
import TheView from './components/TheView';

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route exact path ="/" element={<Home/>}></Route>
            <Route exact path ="/activities" element={<Activities/>}></Route>
            <Route exact path ="/parks" element={<Parks/>}></Route>
            <Route exact path ="/streams" element={<ParkStream/>}></Route>
            <Route exact path ="/the-view" element={<TheView/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
};
