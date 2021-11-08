import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import CartLink from './Cart/CartLink.js'
import { UserContext } from '../context/user'
import LoginLink from '../components/Login/LoginLink'



 const Header = () => {
      const {user} = React.useContext(UserContext);
      const [open, setOpen] = useState(false);
      const links = document.querySelectorAll('.link');
            links.forEach((link) => {
                  link.addEventListener('click', () => {
                        setOpen(false);
                  });
                  });
    return (
      <div className="navbar">
          <div className="logo">
                <img src={logo} alt="" />
          </div>
          <div className={open ? 'burger hide': 'burger'} onClick={() => setOpen(true)}>
          <i className="fas fa-bars"></i>
          </div>
          <ul className={open ? 'navigation active' : "navigation"}>
              <li>
                    <Link to='/' className="link" >Home</Link>
              </li>
              <li>
                    <Link to='/about' className="link" >About</Link>
              </li>
              <li>
                    <Link to='/products' className="link" >Products</Link>
              </li>
              <li>
                    <Link to='/contact' className="link" >Contact</Link>
              </li>
              {user.token && <li>
                  <Link to="/checkout" className="link">Checkout</Link>
            </li>}
            <LoginLink/>
           
              <li>
                  <CartLink></CartLink>
              </li>
           
              <li>
                    <div className="close" onClick={() => setOpen(false)}>
                    <i className="fas fa-times"></i>
                    </div>
              </li>
          </ul>
      </div>
    )
}

export default Header