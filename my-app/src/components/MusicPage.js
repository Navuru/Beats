import React,{useEffect,useState} from "react";
import MusicCollection from "./MusicCollection";
import FavoriteMusic from "./FavoriteMusic";


function MusicPage({music}) {

  const [musicFave,setMusicFave] = React.useState([])

    function addToFaves (music) {
        if (!musicFave) {
          setMusicFave([...musicFave,music])
        }
        console.log("I was clicked")
      }

      return (
        <div id="home">
            <MusicCollection music={music} 
            // addToFaves={addToFaves} 
            />
            {/* <FavoriteMusic music={music} addToFaves={addToFaves}/> */}
        </div>
      )
}

export default MusicPage;