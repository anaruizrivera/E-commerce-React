import React from 'react';
import './product.css'


class Products extends React.Component {
    render() {
        return (
            <React.Fragment>


                <div className="grid-container">

                    <section className="product">
                        <img className="grid-img" src={this.props.item.image} />
                        <h3>{this.props.item.title}</h3>
                        <p>{this.props.item.description}</p>
                        <p>{this.props.item.price}</p>
                        <div class="button-1">
                            <div class="eff-1"></div>
                            <a href="#"> Add to cart </a>
                        </div>

                    </section>



                </div>



            </React.Fragment>
        )
    }
}

export default Products;