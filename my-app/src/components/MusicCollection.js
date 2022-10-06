import React from 'react';
import MusicCard from './MusicCard';

function MusicCollection(addToFaves) {

    const [musicList,setMusic] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:8004/musicList")
          .then((res) => res.json())
          .then((data) => setMusic(data)
            // console.log(musicList)
            // let data = musicList;
        )
      },[])

    return (
        <div className='ui four column grid'>
            <div className='row'>
                <h2>Collection</h2>
                {musicList.map((music,index) => (
                    <MusicCard key={index} music={music}
                     />
                    
                ))}
                
            </div>
        </div>
    )
}
export default MusicCollection;