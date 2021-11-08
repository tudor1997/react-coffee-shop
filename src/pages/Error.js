import React from 'react'
import error from '../assets/error.png'
import {Link} from 'react-router-dom'
const Error = () => {
    return (
        <section className="error">
            <div className="img-error">
                 <img src={error} alt="" />
            </div>
           
                <h1>THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.</h1>
                <h2>YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE MOVED.</h2>
                <Link to='/' className='btn btn-error'>Back home</Link>
        </section>
    )
}

export default Error
