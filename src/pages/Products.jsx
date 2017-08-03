import React, { Component } from "react";
import PRODUCTS from "json/products.json";

class Products extends Component {
	render() {
		return (
			<div className = "Home">
				{PRODUCTS.map((product) => {
           	return (
						 <div>
				  	<h1> {product.name} </h1>
				   	<p>
								{product.id}
								{product.price}
							</p>
						</div>
					);
				})}

			</div>
		);
	}
}

export default Products;
