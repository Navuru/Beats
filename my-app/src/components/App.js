// import React from "react";
import ReactDOM  from "react-dom/client";
// import { BrowserRouter as Routes, Route } from "react-router-dom"
import MusicPage from "./MusicPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import FavoriteMusic from "./FavoriteMusic";

function App() {

  return (
    <>
    <NavBar/>
    {/* <Routes>
        <Route path ="/home" element={<Home/>}/>
        <Route path ="/musicpage" element={<MusicPage/>}/>
        <Route path ="/favoritemusic" element={<FavoriteMusic/>}/>
      </Routes> */}
    <MusicPage/>
    <Footer/>
      </>
      
    
  );
}

export default App;