import React, { Component } from "react";

import "./mainTeam.css";

class MainTeam extends Component {
	render () {
		return (
			<section id="main_team" className="main_team">
				<div className="wrapper">
					<h1>OUR TEAM</h1>
					<div className="team_cards">
						<div className="card">
							<div className="photo"></div>
							<h4 className="name">Vlad Ivanov</h4>
							<p className="position">Designer</p>
							<p className="about_position">Do not seek to change what has come before. Seek to create that which has not.</p>
						</div>
						<div className="card">
							<div className="photo"></div>
							<h4 className="name">Bogdan Makarov</h4>
							<p className="position">Manager</p>
							<p className="about_position">Do not seek to change what has come before. Seek to create that which has not.</p>
						</div>
						<div className="card">
							<div className="photo"></div>
							<h4 className="name">Pavel Konov</h4>
							<p className="position">Copywriter</p>
							<p className="about_position">Do not seek to change what has come before. Seek to create that which has not.</p>
						</div>
						<div className="card">
							<div className="photo"></div>
							<h4 className="name">Max Belov</h4>
							<p className="position">SEO</p>
							<p className="about_position">Do not seek to change what has come before. Seek to create that which has not.</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default MainTeam;
