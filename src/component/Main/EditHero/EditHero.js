import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const editContainer = {
	marginTop: "50px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center"
};

const ButtonWrapper = styled.div`
	margin-top: 10px;
	width: 200px;
	display: flex;
	justify-content: space-evenly;
`
const EditButton = styled.button`
  background: #337ab7;
  border-radius: 5px;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  color: white;
  text-decoration: none
`;

const Back = styled(Link)`
 	background: #2c2c2c;
  border-radius: 5px;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  color: white;
  text-decoration: none
`

class EditHero extends Component {
	constructor(props) {
		super(props);
		this.heroId = props.match.params.id;
		this.state = {
			real_name: "",
			hero_name: "",
			power: ""
		};
	}

	componentWillMount() {
		fetch("http://localhost:4000/heros/" + this.heroId, {
			method: "GET",
		  })
		  .then(res => res.json())
		  .then(data => this.setState({
			real_name: data.real_name,
			hero_name: data.hero_name,
			power: data.power
		  }));
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleEdit = () => {
		const data = this.state;
		fetch("http://localhost:4000/heros/" + this.heroId, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json"
		}
		})
		.then(res => res.json())
		.catch(err => console.log(err));
		alert("Hero Updated");
	}
	render() {
		return (
			<div style={editContainer}>
				<h1>Edit</h1>
				<label htmlFor="name">Real Name</label>
				<input
				id="name"
				name="real_name"
				value={this.state.real_name}
				onChange={this.handleChange}
				type="text"
				/>
				<label htmlFor="rname">Hero Name</label>
				<input
				id="rname"
				name="hero_name"
				value={this.state.hero_name}
				onChange={this.handleChange}
				type="text"
				/>
				<label htmlFor="power">Power</label>
				<input
				id="power"
				name="power"
				value={this.state.power}
				onChange={this.handleChange}
				type="text"
				/>
				<ButtonWrapper>
					<EditButton onClick={this.handleEdit}>Ok</EditButton>
					<Back to='/'>Back</Back>
				</ButtonWrapper>
			</div>
		)
	}
};

export default EditHero;