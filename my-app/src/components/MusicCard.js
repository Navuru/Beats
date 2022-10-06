import React from "react";

function MusicCard ({music,addToFaves}) {

    // const [musicFave,setMusicFave] = React.useState([])

    // function addToFaves (music) {
    //     if (!musicFave.includes(music)) {
    //       setMusicFave([...musicFave,music])
    //     }
    //     console.log("I was clicked")
    //   }

    return (
         <div className="card"
         style={{width: 200,height:300}}
        //  onClick={() => addToFaves(addToFaves)}
        // onClick={addToFaves}
        onClick={(event)=> {
            event.stopPropagation()
            addToFaves(music);
        }}
         >
             <img src={music.image} className="card-img-top" alt="..."/>

            <div className="card-body">
            <h4 className="card-title">{music.name}</h4>
           <div 
        //    className="btn btn-primary"
           >
            <button>
                play
            </button>

           </div>
            </div>
            
        </div>
   
    )
}

export default MusicCard;