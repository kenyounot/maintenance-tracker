import React, { Component } from 'react';
import MaintenanceCard from '../components/MaintenanceCard';

export default class Maintenances extends Component {
	renderMaintenances = maintenances => {
		return maintenances.map((maintenance, idx) => {
			return <MaintenanceCard key={idx} maintenance={maintenance} />;
		});
	};

	render() {
		return (
			<div>
				<h4>Maintenances</h4>
				{this.renderMaintenances(this.props.maintenances)}
			</div>
		);
	}
}
