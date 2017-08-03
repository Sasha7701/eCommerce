import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
	render() {
		const links = [{
			to: "/",
			text: "Welcome",
		}, {
			to: "/products",
			text: "Products",
		}, {
			to: "/item",
			text: "Item",
		}, {
			to: "/cart",
			text: "Cart",
		}, {
			to: "/success",
			text: "Success",
		}];

		return (
			<nav className="Nav">
				{links.map((link) => {
					return (
						<NavLink
							key={link.to}
							to={link.to}
							className="Nav-link"
							activeClassName="is-active"
							exact
						>
							{link.text}
						</NavLink>
					);
				})}
			</nav>
		);
	}
}

export default Navigation;
