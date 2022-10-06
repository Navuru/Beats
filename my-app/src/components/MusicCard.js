import React from "react";

function MusicCard ({music,addToFaves}) {

    const [musicFave,setMusicFave] = React.useState([])

    function addToFaves (music) {
        if (!musicFave.includes(music)) {
          setMusicFave([...musicFave,music])
        }
        console.log("I was clicked")
      }

    return (
         <div className="card"
         style={{width: 200,height:300}}
        onClick={addToFaves}
        
         >
             <img src={music.image} className="card-img-top" alt="..."/>

            <div className="card-body">
            <h4 className="card-title">{music.name}</h4>
            
            </div>
            
        </div>
   
    )
}

export default MusicCard;