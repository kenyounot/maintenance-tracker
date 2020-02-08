import React, { Component } from 'react';
import { fetchVehicles } from '../actions/fetchVehicles';
import { connect } from 'react-redux';

export class Garage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchVehicles();
	}

	render() {
		return <div>Garage</div>;
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchVehicles: () => dispatch(fetchVehicles())
	};
};

export default connect(null, mapDispatchToProps)(Garage);
