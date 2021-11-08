import React from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
import { CartContext } from '../../context/cart'
const CartItem = ({id, title, image, price,amount}) => {
    // cart context
    const {removeItem, increaseAmount,decreaseAmount} = React.useContext(CartContext);
    return (
        <article className="cartItem">
           <div className="cartItemImg">
               <img src={image} alt={title} />
           </div>
           <div className="cartItemInfo">
                <h4 className="itemTitle">{title}</h4>
                <h5 className="itemPrice">${price}</h5>
                <button type="button" className="remove-item" onClick={() => {
                    removeItem(id)
                }}><i class="fas fa-trash"></i> Remove </button>
           </div>
           <div className="cartItemAmount">
                <FaAngleUp className="arrow" onClick={() => {
                    increaseAmount(id)
                }}></FaAngleUp>
                <p className="amount">{amount}</p>
                <FaAngleDown className="arrow" onClick={() => {
                    decreaseAmount(id, amount);
                }}></FaAngleDown>
           </div>
        </article>
    )
}

export default CartItem
