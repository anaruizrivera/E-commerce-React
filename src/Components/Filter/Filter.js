import React from "react";
import ecommerceProducts from "../ProductPage/storeitems.json";
import Products from "../ProductPage/Products";
import "../ProductPage/product.css"

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "default",
      cost: "default"
    }
  }

  handlePriceDropdownSelect = (event) => {
    this.setState({
      cost: event.target.value,
      type: event.target.value
    })
  }


  render() {
    const { type, cost } = this.state;
    return (
      <React.Fragment>
        <div className="gridfilter">
          <label className="filters">
            Type:
          </label>
          <select value={type} onChange={this.handlePriceDropdownSelect}>
            <option value="default">All</option>
            <option value={this.props.type}>Best Selling</option>
            <option value={this.props.type}>Good</option>
          </select>
        </div>

        <div className="gridpricefilter">
          <label className="filters">
            Price:
          </label>
          <select value={cost} onChange={this.handlePriceDropdownSelect}>
            <option value="default">All</option>
            <option value="low">$0 - $100</option>
            <option value="medium">$100 - $200</option>
            <option value="high">$200 - $300</option>


          </select>
        </div>
        <div className="grid-container">
          {ecommerceProducts.ecommerceProducts.map(item => {
            if (type === 'default' && cost === 'default') {
              return <Products item={item} />
            } else if (type === item.type && cost === item.cost) {
              return <Products item={item} />
            } else if (type === item.type || cost === item.cost) {
              return <Products item={item} />
            }
          })}
        </div>
      </React.Fragment>
    );
  }
}


export default Filter;





