//like Post.. 
//it will be called by Profile
// it will have add project and project list

import React, {Component} from "react";
import ProjectList from "./ProjectList";
import AddProject from "./AddProject";
import axios from "axios";

export default class portfolio extends Component {
  state = {
    portfolio:[]
  };

  componentDidMount = () => {
    if(this.props.user) {
      this.getData();
    } else {
      console.log("fail",this.props)
      this.props.history.push("/login")
    }
  };

  getData = () => {
    axios.get(`api/portfolio/${this.props.user._id}`)
    .then(response => {
      console.log("working", response)
      this.setState({
        portfolio:response.data
      });
    })
    .catch(err => {
      console.log (err);
    });
  }

render () {
  return (
    <div className="portfolioContainer">
      <h2>portfolio</h2>
      <AddProject user={this.props.user} {...this.props}/>
      <ProjectList portfolio={this.state.portfolio} {...this.props}/>
    </div>
  );
}


}