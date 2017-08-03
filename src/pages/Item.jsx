import React, { Component } from "react";

class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productId: props.match.params.productId,
		};
	}
	render() {
		return (
			<div className="app">
				<h1>Product {this.state.productId}</h1>
			</div>
		);
	}
}
export default Item;
