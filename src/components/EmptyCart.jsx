import React, { Component } from "react";

class EmptyCart extends React.Component {

 render() {
const { cart } = this.props;
	return (
		<div className="empty-cart">
			<img src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png" alt="empty-cart"/>
			<div>
			<h1>{cart.name}</h1>
			</div>
			<h2>You cart is empty!</h2>
</div>

	);
};
};
export default EmptyCart;
