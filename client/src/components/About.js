// a form says user to add info after sign in

import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";



export default class About extends Component{
     state = {
       name:"",
       city:"",
       skills:"",
       hobbies:""
     };

     handleChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
      [name]: value
      });
    }; 
   

    handleSubmit = event => {
      event.preventDefault();
  
      // http://localhost:5555/api/projects
      axios
        .post("/api/about", {
          name: this.state.name,
          city: this.state.city,
          skills: this.state.skills,
          hobbies:this.state.hobbies       
        })
        .then(() => {
          this.setState({
            name: "",
            city: "",
            skills:"",
            hobbies:""
          });
          // updating parent's component's state
          this.props.getData();
          this.props.history.push("/profile")
        })
        .catch(err => {
          console.log(err);
        });
    };
  render() {
      return (
        <Form onSubmit={this.handleSubmit}>
           <Form.Group>
           <Form.Label htmlFor="name">Name(as you like to see in your profile): </Form.Label>
             <Form.Control
              type="text"
              onChange={this.handleChange}
              id="name"
              name="name"
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="city">City: </Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="city"
              id="city"
              value={this.state.description}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="skills">Skills: </Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="skills"
              id="skills"
              value={this.state.skills}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="hobbies">Hobbies: </Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="hobbies"
              id="hobbies"
              value={this.state.hobbies}
            />
          </Form.Group>
  
          <Button type="submit">Add to your profile</Button>
        </Form>
      );
    }
  }
  