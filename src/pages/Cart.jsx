
import React, { Component } from 'react';
import Checkout from "components/Checkout";
import PropTypes from 'prop-types';

class Cart extends Component {
	 constructor(props) {
	 	super(props);

		 this.state = {
			// cartTotal: 0,

		};
	}


	render() {
		const { cart, cartCount } = this.props;
		return (


			<div className="cartCount">
				<span>{ cartCount }</span>
				{cart.map((item) => {
					return (
						 <img src = {item.images[0].medium}/>
					);
			 })}

			</div>

		);

	}
}
export default Cart;
