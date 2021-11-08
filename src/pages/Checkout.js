import React from 'react'
import { CartContext } from '../context/cart'
import { UserContext } from '../context/user'
import { useHistory } from 'react-router-dom'
import EmptyCart from '../components/Cart/EmptyCart'

// react-stripe-elements
import {CardElement,Elements,useStripe,useElements} from '@stripe/react-stripe-js';
import {loadStripe } from '@stripe/stripe-js';
import submitOrder from '../strapi/submitOrder'


const Checkout = () => {
    const {cart,total,clearCart} = React.useContext(CartContext);
    const {user, showAlert, hideAlert,alert} = React.useContext(UserContext);
    const history = useHistory();
    // state values
    const [name,setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [error, setError] = React.useState('');
    const isEmpty = !name || alert.show;


    const stripe = useStripe();
    const elements = useElements();
  
    async function handleSubmit(e) {
       
        e.preventDefault();
        showAlert({msg:"Submitting order... Please wait."});

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
          });
          if (paymentMethod) {
            const cardElement = elements.getElement(CardElement);
            let token  = await stripe.createToken(cardElement);
            console.log(token);

            if(token){
                setError("");
                const {id} = token;
                let order = await submitOrder({
                    name:name,
                    address:address,
                    total:total, 
                    items:cart,
                    stripeTokenId:id, 
                    userToken:user.token
                });

                if(order){
                    showAlert({msg:"Your order is complete"});
                    clearCart();
                    history.push("/");
                    return;
                }else{
                    showAlert({msg:"There was an error with your order. Please try again!",
                     type:"danger"});
                }
            }else{
                hideAlert();
                setError(error.message)
            }
    }
   
   
    }
    if(cart.length < 1) return <EmptyCart></EmptyCart>

    return (
        <section className="checkout">
            <h1 className="section-title">Checkout</h1>
            <div className="form-checkout-container">
                <form className="form-checkout">
                        <h3>Order Total: <span>${total}</span></h3>
                        {/* single input */}
                        <div className="form-control checkout-control">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        <div className="form-control checkout-control">
                            <label htmlFor="address">Address</label>
                            <input type="textarea" id="address" value={address} onChange={(e)=> setAddress(e.target.value)}/>
                        </div>
                        {/* end of single input */}
                        {/* card element */}
                            <div className="stripe-input">
                                <label htmlFor="card-element">Credit or Debit Card</label>
                                <p className="stripe-info">
                                    Test using this credit card : <span>4242 4242 4242 4242</span>
                                    <br/>
                                    Enter any 5 digits for the zip code
                                    <br/>
                                    Enter 3 digits for the CVC
                                </p>
                            </div>
                        {/* end of card element */}
                        <div className="stripe-element">
                                <CardElement className="card-element" />
                        </div>
                        {/* stripe errors */}
                        {error && <p className="form-empty">{error}</p>}
                        {/* empty value */}
                        {isEmpty ?   <p className="form-empty">Please fill out name field</p> 
                        : <button type="submit" className="login-btn submit" onClick={handleSubmit}>Submit</button>}
                      
                        
                </form>
            </div>
        </section>
    )
}


const stripePromise = loadStripe("pk_test_51JsmkfIyirVKlOn474pg9roRqF9nyTEVnKU4vDzRY3Ef2r1EIOqH6XmEN94eMt69xTcBoLXVcpfSYEadnLLxfXsV007MbVYS2k")
const StripeWrapper = () =>{
    return (
        <Elements stripe={stripePromise}>
            <Checkout></Checkout>
        </Elements>
)
}

export default StripeWrapper;