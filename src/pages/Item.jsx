import React, { Component } from "react";
import PRODUCTS from "json/products.json";

class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {
			itemId: props.match.params.itemId,
		};
	}
	render() {
		 const item = PRODUCTS[this.state.itemId];
		// console.log(PRODUCTS[this.state.itemId].name);
		// console.log(item);
		return (
			<div className="app">
				{/* <h1>{this.state.itemId}</h1> */}
				<h1>{item.name}</h1>
				<p>{item.description}</p>
				<p>{item.category}</p>
				<h1>${item.price}</h1>

				{item.specs.map((item) => {
					return ([
						<p>{item.label}</p>,
						<p>{item.value}</p>,
					 ]);
				 })}

				 {item.images.map((item) => {
				 return ([
					 <img src = {item.medium}/>,
					 ]);
			  })}

			</div>

		);
	}
}

export default Item;
