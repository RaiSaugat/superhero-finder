import React, { Component } from "react";


class Form extends Component {
  constructor() {
    super();
    this.state = {
      real_name: "",
      hero_name: "",
      power: "",
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    const data = this.state;
    console.log(data);
    // fetch("http://localhost:4000/heros", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(res => res.json())
    //   .catch(err => console.log(err));
    // alert("Hero Added");
  };
  render() {
    const formContainer = {
      marginTop: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    };
    return (
      <div style={formContainer}>
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
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default Form;
