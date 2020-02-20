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
			return <h5>Maintenace Total: ${total.toFixed(2)}</h5>;
		}
	};

	render() {
		return (
			<div>
				{this.maintenanceTotal(this.props.maintenances)}
				<CardDeck>{this.renderMaintenances(this.props.maintenances)}</CardDeck>
			</div>
		);
	}
}
