import React, { Component } from 'react';




import Products from './Components/ProductPage/Products';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Filter from './Components/Filter/Filter';

export default class App extends React.Component {
  render() {
  
    return (
      <React.Fragment>
        <Navbar />
        <Filter />
        <Footer />
      </React.Fragment>
    )

  }
}
