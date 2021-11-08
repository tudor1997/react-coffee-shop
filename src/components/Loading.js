import React from 'react'
import loading from '../assets/drop.svg'
const Loading = () => {
    return (
        <section className="loading">
            <h2>Loading...</h2>
           <div className="img-loading"> 
           <img src={loading} alt="Loading" />
           </div>
           
        </section>
    )
}

export default Loading
