import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import batman from '../../../assets/batman.jpg';
import flash from '../../../assets/flash.jpg';
import superman from '../../../assets/superman.jpg';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroList = styled.div`
  padding: 40px 20px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  background: #ccc;
  min-width: 450px;
  margin: 10px auto;
`;

const image = {
  backgroundColor: 'red',
  position: 'absolute',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
}

const HeroSearch = styled.input`
  border: none;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`

const ButtonComponent = styled.div`
  display: flex;
  justify-content: space-around;
`;

const EditButton = styled(NavLink)`
  background: #337ab7;
  border-radius: 5px;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  color: white;
  text-decoration: none
`;

const DeleteButton = styled.button`
  background: #d9534f;
  border-radius: 5px;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  color: white;
`;
class List extends Component {
  constructor() {
    super();
    this.state = {
      heros: [],
      query: ""
    };
  }
  componentWillMount() {
    const url = "http://localhost:4000/heros";
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          heros: data
        })
      )
      .catch(err => {
        console.log(err);
      });
  }
  handleDelete = id => {
    fetch("http://localhost:4000/heros/" + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .catch(err => console.log(err));
    this.setState({
      heros: this.state.heros.filter((hero, index) => hero.id !== id)
    });
  };

  handleQuery = e => {
    this.setState({
      query: e.target.value
    });
  };
  render() {
    const hero = this.state.heros.filter(hero => {
      return hero.hero_name.toLowerCase().indexOf(this.state.query.toLowerCase()) !==-1
    })
    const image = this.state.heros.filter(hero => {
      return hero.hero_name
    })
    return (
      <div>
        <HeroSearch
          type="text"
          value={this.state.query}
          onChange={this.handleQuery}
          placeholder="Search Hero"
        />
        <h2>Hero List</h2>
        {hero.length !== 0 ? 
          <HeroWrapper>
          {hero.map((hero, index) => {
            return (
              <HeroList key={index}>
                <img style={image} src={superman} alt=""/>
                <p>Name: {hero.hero_name}</p>
                <p>Real Name: {hero.real_name}</p>
                <p>Power: {hero.power}</p>
                <ButtonComponent>
                  <EditButton to={`../edit/${hero.id}`}>Edit</EditButton>
                  <DeleteButton onClick={() => this.handleDelete(hero.id)}>
                    Delete
                  </DeleteButton>
                </ButtonComponent>
              </HeroList>
            );
          })}
        </HeroWrapper>
          : <HeroWrapper><HeroList>No Hero Found. Hero on Duty</HeroList></HeroWrapper>}
      </div>
    );
  }
}

export default List;
