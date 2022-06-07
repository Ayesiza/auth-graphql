import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <Menu pointing secondary>
      <Link to="/" >
        <Menu.Item
          name='home'
        />
        </Link>
        <Link to="login" >
        <Menu.Item
          name='login'
        />
         </Link>
       
      </Menu>

     <Outlet/>
    </div>
  )
}

export default Navbar