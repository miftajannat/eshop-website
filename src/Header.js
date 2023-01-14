import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className='header'>
              <div className="header_logo">
      <StorefrontIcon className='header_logoImage' forntsize="large"/>
      <h2 className='header_logoTitle'>eSHOP</h2>
      </div>

      <div className="header_search">
        <input type="text" className="header_searchInput"/>
        <SearchIcon className="header_searchIcon"/>
      </div>

    <div className="header_nav">
      <div className="nav_item">
        <span className="nav_itemLineOne">Hello Guest</span>
         <span className="nav_itemLineTwo">Sign In</span>
      </div>
      <div className="nav_item">
         <span className="nav_itemLineOne">Your</span>
         <span className="nav_itemLineTwo">Shop</span>
      </div>
      <div className="nav_item1">
        <ShoppingBasketIcon className='itemBasket'/>
         <span className="nav_itemLineTwo nav_basketCount">0</span>
      </div>
    </div>
      
    </div>
  )
}

export default Header
