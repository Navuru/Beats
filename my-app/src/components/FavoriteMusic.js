import React from "react";
import MusicCard from "./MusicCard";

function FavoriteMusic ({FavoriteMusic,addToFaves}) {

    return (
        <div className="favorites">
            {FavoriteMusic?.map((music) => (
                <MusicCard
                key={music.id}
                music={music}
                handleAdd={addToFaves}
                />
            ))}
            <h3>Favorites</h3>

        </div>
    )
}
export default FavoriteMusic;