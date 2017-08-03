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
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path="/" component={Welcome} />
						<Route exact path="/products" component={Products} />
						<Route exact path="/item/:itemId" component={Item} />
						<Route exact path="/cart" component={Cart} />
						<Route exact path="/success" component={Success} />
						<Route path="*" component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
