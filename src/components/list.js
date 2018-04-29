import React from 'react';

import axios from 'axios';

export defult class shopList extends React.Component {
	state = {
		list:[]
	}

	componentDidMount() {
		// fill in the name of data file
		axios.get(``)
			.then (res => {
				const list = res.data;
				this.setState({ list });
			})
	}


	}

export default class shopList extends React.Component {
	state = {
		// should we be using item here? 
		item: '',
	}
	handleChange = event => {
		this.setState({ item: event.target.value});
	}
	handleSubmit = event => {
		event.preventDefault();
		// 
		const user = {
			item: this.state.user
		};
		// file with data
		axios.post(``,{ user })
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
		}
	}


