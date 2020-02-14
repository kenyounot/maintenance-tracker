import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import MaintenanceCard from '../components/MaintenanceCard';

export default class Maintenances extends Component {
	renderMaintenances = maintenances => {
		return maintenances.map((maintenance, idx) => {
			return <MaintenanceCard handleDelete={this.props.handleDelete} key={idx} maintenance={maintenance} />;
		});
	};

	render() {
		return (
			<div>
				<h4>Maintenances</h4>
				<CardDeck>{this.renderMaintenances(this.props.maintenances)}</CardDeck>
			</div>
		);
	}
}
