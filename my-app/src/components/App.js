// import React from "react";
import ReactDOM  from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import MusicPage from "./MusicPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import FavoriteMusic from "./FavoriteMusic";

function App() {

  return (
    <div className="App">
    <NavBar/>

      <Routes>
          <Route exact path="/home" element={<MusicPage/>}/>
          <Route path="/favorites" element={<FavoriteMusic/>}/>
        </Routes>

      {/* <MusicPage/> */}
      <Footer/>
    </div>
     
      
    
  );
}

export default App;