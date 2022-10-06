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
        <div>
            <MusicCollection music={music} 
              // handleAdd={addToFaves}
            // addToFaves={addToFaves} 
            // handleSearch={handeSearch} 
            />
            <FavoriteMusic music={music} addToFaves={addToFaves}/>
        </div>
      )
}

export default MusicPage;