import React from 'react'
import "./Header.css"
import logo from "../../assets/logo/long-logo.png"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from "./BottomNav"
import MobileSearchBar from "../MobileSearchBar/MobileSearchBar"


function Header() {
  return (
    <>
    <div className='navbar'>
        <img src={logo} className="navbar-logo" />
        <div className='search-bar'>
            <div className='search-bar-text'>Any where</div>
            <div className='search-bar-text'>Any week</div>
            <div className='search-bar-text2'>Add guest</div>
            <div className='search-Icon'>
                <SearchRoundedIcon style={{fontSize:'1rem',fontWeight:"800"}}/>
            </div>
            
        </div>
        <div className='proifle-container'>
            <div className='airnbn-your-home'>Airbnb your home</div>
            <div className='globe-icon' >
                <LanguageIcon style={{fontSize:"1.3rem"}}/>
            </div>
            <div className='profile-div'>
                <BasicMenu />
            </div>
        </div>
    </div>
    
    <MobileSearchBar />

    <SimpleBottomNavigation />
    </>
  )
}

export default Header