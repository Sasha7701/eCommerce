import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Welcome from "pages/Welcome";
import Item from "pages/Item";
import Cart from "pages/Cart";
import Products from "pages/Products";
import Success from "pages/Success";
import FourOhFour from "pages/404";
import PRODUCT from "json/products.json";

class App extends React.Component {
	state = {
			 products: PRODUCT,
			 cart: [],
			 cartCount: 0,
		 };


_handleAdd = (ev) => {
	// let cart = this.state.cart.concat([ev.target.value])
	const { products, cart } = this.state;
	this.setState({
		cart: [...this.state.cart, ev.target.value],
		cartCount: cart.length + 1,
	});
	console.log(ev.target.value);
};
addCart(ev) {
	this.setState({ cart: this.state.cart });
}
_getProduct = (itemId) => {
	return this.state.products.reduce((prev, item) => {
		return item.id === itemId ? item : prev;
	});
}

render() {
	const { products, cart, cartCount } = this.state;
	return (
		<BrowserRouter>
			<div>
				<Navigation cartCount={ this.state.cartCount }/>
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route exact path="/products" render={(props) => {
						return (
							<Products {...props}
								products={products}
							/>
						);
					}}
					 />

					<Route exact path="/item/:itemId" render={(props) => {
						return (
							<Item {...props}
					 handleAdd={this._handleAdd}
					 item={this._getProduct(props.match.params.itemId)}
					  />
					 );
				 }}
					/>
					<Route exact path="/cart" render={(props) => {
						return (
							<Cart

								cart={cart}
								cartCount={cartCount}
							/>
					 );
					}}
					/>

					<Route exact path="/success" component={Success} />
					<Route path="*" component={FourOhFour} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}
}

export default App;
