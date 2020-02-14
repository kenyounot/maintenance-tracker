import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import MaintenanceCard from '../components/MaintenanceCard';

export default class Maintenances extends Component {
	renderMaintenances = maintenances => {
		return maintenances.map((maintenance, idx) => {
			return (
				<MaintenanceCard
					handleDelete={this.props.handleDelete}
					key={idx}
					maintenance={maintenance}
				/>
			);
		});
	};

	maintenanceTotal = maintenances => {
		let total = 0;
		if (maintenances.length) {
			maintenances.forEach(maint => (total += maint.price));
			return total;
		}
	};

	render() {
		console.log(this.maintenanceTotal(this.props.maintenances));

		return (
			<div>
				<h5>Maintenace Total: {this.maintenanceTotal(this.props.maintenances)}</h5>
				<CardDeck>{this.renderMaintenances(this.props.maintenances)}</CardDeck>
			</div>
		);
	}
}
