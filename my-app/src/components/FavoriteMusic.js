import React from "react";
import MusicCard from "./MusicCard";

function FavoriteMusic ({addToFaves,musicFave}) {
    

    return (
        <div className="favorites" id="favorites">
            {/* <h3>Cool music</h3> */}
            {musicFave?.map((music) => (
                <MusicCard
                key={music.id}
                music={music}
                handleAdd={addToFaves}
                />
            ))}
        
            <h2>Favorites</h2>
            <br>
            </br>
            <h3>All you need is love, and maybe a little music.</h3>
            <h3>Music is not just an art but it's also therapy.</h3>

        </div>
    )
}
export default FavoriteMusic;