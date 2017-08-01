import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class Ap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Word: 'mujeres',
			newWord: ''
		}
	}

	changeWord() {
		this.setState({word: this.state.newWord});
		console.log('state', this.state)
	}



	render() {
		return (
				<div className="form-source">
					<Form inline>
					<FormControl
					className="Word-input"
					placeholder= {this.state.Word} 
					onChange={event => this.setState({newWord: event.target.value})}
					/>
					<Button onClick={() => this.changeWord()}>
					Submit
					</Button>
					</Form>
				</div>
			)
		
	}

}

export default Ap;