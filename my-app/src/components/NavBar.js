import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {

    const [musicList,setMusic] = React.useState([]);
    const [searchState, setSearchState] = React.useState([                 ])

    const handleSearch = (search) => {
        console.log(search)
    
        if(search === ""){
          setSearchState(!searchState)
        }
        let filteredMusic = musicList.filter((music)=>{
          if(music.name.toLowerCase().startsWith(search.toLowerCase())){
            return music
          }
        })
        setMusic(filteredMusic)
      }

    return (
    <nav 
    className="navbar bg-light">
        <div className="container-fluid">
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search Music" aria-label="Search"/>
                <button 
                className="btn btn-outline-success" 
                type="submit"
                onSubmit={(e) => {
                    handleSearch(e.target.value)
                }}
                >
                Search
                </button>
            </form>
            <div className='links'>
                <ul className='links_list'>
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </div>
            </div>

    </nav>

   )}
export default NavBar;