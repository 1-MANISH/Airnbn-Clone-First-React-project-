import React from 'react'
import "./MobileSearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

function MobileSearchBar() {
  return (
    <div className='mobile-search-bar'>
       <div className='left-search'>
        <SearchIcon />
       </div>
       <div className='middle-search'>
            <h5>Where to ?</h5>
            <p>Anywhere Any weak Add guest</p>
       </div>
       <div className='right-search'>
            <TuneIcon/>
       </div>
    </div>
  )
}

export default MobileSearchBar