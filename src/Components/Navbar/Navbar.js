import React, { Component } from 'react';
import './navbar.css';


const images = {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuQurigbMzrIAjhEJ_0DNSmHPeSsVSaZP1AxlmcF5fdrDl1YjI"
}

export default class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>

                <header>
                    <nav id="navbar">
                        <div class="container">
                            <img className="logo_image"
                                src={images.src} />
                            <ul>
                                <li><a class="" href="index.html">Home</a></li>
                                <li><a class="current" href="product.html">About</a></li>
                                <li><a class="" href="contact.html">Contact</a></li>
                            </ul>
                        </div>

                    </nav>

                </header>

            </React.Fragment>
        )

    }

}
