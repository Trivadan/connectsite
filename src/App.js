import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Editions from './pages/editions/Editions';

import { BrowserRouter, Routes, Route} from "react-router-dom";
// import './style.css';
// import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/editions" element={<Editions />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
