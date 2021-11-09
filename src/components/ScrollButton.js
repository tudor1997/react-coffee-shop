import React from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'
import { UserContext } from '../context/user'

const scrollBackToTop = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
}

const ScrollButton = () => {
    const {height} = React.useContext(UserContext);
    return (
     <button className={height > 100 ? "scrollBtn" : "scrollBtn invisible"}
     onClick={scrollBackToTop}><FaAngleDoubleUp/></button>
    )
}

export default ScrollButton
