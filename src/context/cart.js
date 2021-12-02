import React from 'react'
import reducer from './reducer';

// Actions
import {REMOVE,INCREASE,DECREASE,ADDTOCART,CLEARCART} from './actions';
const CartContext = React.createContext();

function getCartFromLocalStorage() {
    return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart'))
    : []
}



const CartProvider = ({children}) => {
    const [cart, dispatch] = React.useReducer(reducer,getCartFromLocalStorage());
    const [total, setTotal] = React.useState(0);
    const [cartItems, setCartItems] = React.useState(0);

    React.useEffect(() => {
        // local storage 
        localStorage.setItem('cart', JSON.stringify(cart))
        // cart items
        let newCartItems = cart.reduce((total,cartItem) => {
            return (total += cartItem.amount);
        },0)
        setCartItems(newCartItems);
        //cart total
        let newTotal = cart.reduce((total,cartItem)=>{
            return (total += (cartItem.amount * cartItem.price))
        },0)
        newTotal = parseFloat(newTotal.toFixed(2));
        setTotal(newTotal);
    },[cart])



    // remove items 
    const removeItem = (id) => {
        dispatch({
            type:REMOVE,
            payload:id
        })
    }
    // increase amount
    const increaseAmount = (id) => {
        dispatch({
            type:INCREASE,
            payload:id
        })
    }
    // decrease amount
    const decreaseAmount = (id,amount) => {
    
        if(amount === 1){
            dispatch({
                type:REMOVE,
                payload:id
            })
        }else{
            dispatch({
                type:DECREASE,
                payload:id
            })      
        }
    }
    // add to cart
    const addToCart = (product) => {
        let item = [...cart].find(item => item.id === product.id);
        if(item){
            dispatch({
                type:INCREASE,
                payload:product.id
            })
        }else{
            dispatch({
                type:ADDTOCART,
                payload:product
            })
        }  
    }
    // clear cart
    const clearCart = () => {
       dispatch({
           type:CLEARCART
       })
    }

    return (
     <CartContext.Provider  value={{cart,total,cartItems, removeItem,
      increaseAmount, decreaseAmount, addToCart, clearCart}}>
         {children}
     </CartContext.Provider>
    )
}

export  {CartContext, CartProvider}
