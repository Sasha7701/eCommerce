import "./Item.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import EmptyCart from "components/EmptyCart";

class Item extends Component {
	constructor(props) {
		super(props);
		// this._handleClick = this._handleAdd.bind(this);
		this.state = {
			itemId: props.match.params.itemId,
			cart: [],
		 };
	}

	_handleAdd = (ev) => {
		// let cart = this.state.cart.concat([ev.target.value])
		this.setState({ cart: [...this.state.cart, ev.target.value] });
		console.log(ev.target.value);
	};

	addCart(ev) {
		this.setState({ cart: this.state.cart });
	}

					 // if (isInCart) {
	        //     removeFromCart(itemId);
	        // } else {
	        //     addToCart(itemId);
	        // }

	render() {
		 const item = PRODUCTS[this.state.itemId];
		// console.log(PRODUCTS[this.state.itemId].name);
		 console.log(this.props, "ssssssssssss");
		return (
			<div className="item">
				{/* <h1>{this.state.itemId}</h1> */}
				<h1 className = "watch-name">{item.name}</h1>
				<div className = "item-image">
				 {item.images.map((item, i) => {
				 return ([
					 <img src = {item.medium} className = "img"/>,
					 ]);
			  })}
				</div>
				<button className="addCart" onClick={this._handleAdd} value={item.id}>
				add Cart
			  </button>
				<div className = "text">
				 <p className = "description">{item.description}</p>
				 <p>{item.category}</p>
				 <h1>${item.price}</h1>
			 </div>
				<div className = "specs">
					{item.specs.map((item) => {
						return ([
					 	<p>{item.label}:</p>,
	          <p>{item.value}</p>,

					 ]);
				 })}

				</div>
			</div>

		);
	}
}

export default Item;
