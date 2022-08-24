import React from "react";
import './component/Tracking'
import Header from "./component/Header";
import Nav from "./component/Nav";

import './App.css';

import Dashboard from "./pages/Dashboard";
import Roster from "./pages/Roster";
import Daily from "./pages/Daily";
import TrackingPage from "./pages/TrackingPage";

import Settings from "./pages/Setting"
import { Routes, Route } from 'react-router-dom';

//
function App() {
  

  return (
    <div  >
      <Header/>
      <main style={styles.container}>
        <Nav/>
        <section>
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='Dashboard' element={<Dashboard/>} />
            <Route path='TrackingPage' element={<TrackingPage/>} />
            <Route path='Roster' element={<Roster/>} />
            <Route path='Daily' element={<Daily/>} />
            <Route path='Settings' element={< Settings/>}/>
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default App;

const styles={
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
}