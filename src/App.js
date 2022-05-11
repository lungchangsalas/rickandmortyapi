import React from "react";
import { BrowserRouter  as Router, Navigate, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar} from './components/layout/Navbar';
import {CharacterList} from './components/Character/CharacterList';
import {LocationList} from './components/Location/LocationList';
import {Location} from './components/Location/Location';
import {Episode} from './components/Episode/Episode';
import {EpisodeList} from './components/Episode/EpisodeList';

import * as myConst from './config/router/paths';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to={myConst.CHARACTER}/>}></Route>
            <Route path={myConst.CHARACTER} element={<CharacterList />}></Route>
            <Route path={myConst.LOCATION} element={<LocationList />}></Route>
            <Route path={`${myConst.LOCATION}/:id`} element={<Location />}></Route>
            <Route path={myConst.EPISODE} element={<EpisodeList />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
