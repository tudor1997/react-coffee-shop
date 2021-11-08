import React from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../../context/user'
import {CartContext} from '../../context/cart'


const LoginLink = () => {
    const {user, userLogout} = React.useContext(UserContext);
    const {clearCart} = React.useContext(CartContext);

    if(user.token){
    return  <button className="link logout" onClick={()=> {
            userLogout();
            clearCart();
        }
    }>Logout</button>
    }
    return (
       <Link to="/login" className="link">Login</Link>
    )
}

export default LoginLink
