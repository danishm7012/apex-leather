import React from 'react'
import TopHeader from './topheader'
import DeskopSearch from './desktopSearch'
import MainNavbar from './mainNavbar'

const Header = () => {
    return (
        <div>
            <TopHeader/>
            <DeskopSearch/>
            <MainNavbar/>
        </div>
    )
}

export default Header
