import React, { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import S2t from './S2t/S2t';
import T2t from './T2t/T2t';
import Home from './Home/Home';
import F2t  from './F2t/F2t';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path = '/s2t' element = {<S2t/>} />
          <Route path = '/t2t' element = {<T2t/>} />
          <Route path = '/home' element = {<Home/>} />
          <Route path = '/f2t' element = {<F2t/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
