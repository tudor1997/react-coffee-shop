import React from 'react'
import { Link } from 'react-router-dom'


import Gallery from '../components/Gallery/Gallery'
import Featured from '../components/Products/Featured'

 const Home = () => {
    return (
        <div className="home-page">
            <section className="home">
                <h1>
                    Coffee Shop
                </h1>
                <Link className="btn btn-home" to="/products"> 
                See products
                </Link>
            </section>
            <section className="about-section">
                <h1>About us</h1>
                <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin efficitur diam eget purus lobortis placerat. Suspendisse lacinia, nisl a egestas fermentum,
                isus dui volutpat nunc, ac suscipit sapien elit id sapien. Praesent eu tempus lorem. 
                Sed vel urna lorem. Nullam arcu dui, euismod et consectetur sit amet, 
                sagittis sit amet nulla. Interdum et malesuada fames ac ante ipsum primis in
                 faucibus. Duis pellentesque interdum metus vitae porta. Etiam faucibus magna non 
                 efficitur blandit.

                Nunc laoreet finibus sapien, ut tincidunt nisl.
                 Cras non est et ipsum laoreet faucibus. 
                 Duis congue elit quis arcu eleifend aliquet at eu est.
                  Nullam ex erat, porta ut scelerisque non, rutrum ut ligula. 
                  Quisque eleifend ante quis nunc finibus tincidunt.
                   Morbi accumsan, turpis quis hendrerit ultricies, quam dolor porttitor odio, vel cursus lacus nisl nec magna. Nullam at ligula turpis. Integer enim metus,
                    porta vel mi eu, sollicitudin dictum dolor. Ut eleifend eros ac imperdiet sodales. 
                    Mauris venenatis odio sit amet ligula vestibulum tempor.
                </p>
                <Link to="/about" className="btn btn-about">See more...</Link>
            </section>
            <Gallery></Gallery>
            <Featured></Featured>
        </div>
    )
}
export default Home