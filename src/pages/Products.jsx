import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Products extends Component {
	render() {
		return (
			<div className = "Home">
				{PRODUCTS.map((product, index) => {
           	return ([
						 <div>
				  	<h1>{product.name}</h1>
				   	<p>
								{product.category}
							</p>
							<p>
								${product.price}
							</p>
							<div>
								<Link to={`/item/${index}`}>
								 <img src = {product.images[0].medium}/>
							 	 <img src = {product.images[1].medium}/>
							  </Link>

							</div>
						</div>,
					]);
				})}

			</div>
		);
	}
}

export default Products;
