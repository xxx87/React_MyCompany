import React, { Component } from "react";
import "./header.css";

class Header extends Component {

	state = {
		openMenu: false
	};

	render(){
		return (
			<header id="home">
				<div className="header_logo">
					<p>MyCompany</p>
				</div>

				<nav>
					<div className={this.state.openMenu ? 'topnav responsive' : 'topnav'} id="myTopnav">
						<a href="#home">HOME</a>
						<a href="#about">About</a>
						<a href="#main_services">SERVICES</a>
						<a href="#main_team">portfolio</a>
						<a href="#main_testimonials">testimonials</a>
						<a href="#contact_form">contact</a>
						<a href={null} id="menu" className="icon" onClick={this.showMenu}>&#9776;</a>
					</div>
				</nav>

			</header>
		);
	}

	showMenu = () => {
		this.setState({
			openMenu: !this.state.openMenu
		})
	}

}

export default Header;
