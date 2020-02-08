import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Garage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div>Garage</div>;
	}
}

export default connect()(Garage);
