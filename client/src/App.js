import React from "react";
import Navigation from "./components/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ChatPage from "./components/ChatPage";
import ChatList from "./components/ChatList";
import TaskDetails from "./components/ToDoList";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import backgroundImg from "./images/dot-bg-02.png"


class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  componentDidMount() {
    axios.get("/api/auth/loggedin").then(response => {
      const user = response.data;
      this.setUser(user);
    });
  }

  render() {
    return (
      <div className="App">

        <Navigation user={this.state.user} setUser={this.setUser} />
      <Switch>
        <Route
        exact path="/signup"
        render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
        exact path="/login"
        render={props => <Login setUser={this.setUser} {...props} />}
        />
        {/* if (this.state.user) { */}
        <Route
          exact path="/about"
          render={props => <About {...props} user={this.state.user} />}
          // render={props => {
          //   if (this.state.user) return <About {...props} user={this.state.user} />;
          // else return <Redirect to="/login" />}}  
          />

        <Route
          exact path="/profile"
          render={props => <Profile {...props} user={this.state.user}/> }
          // render={props => {
          //   if (this.state.user) return <Profile {...props} user={this.state.user}/>;
          //   else return <Redirect to="/login" />
            
          // }}
        />
        <Route
          exact path="/chat/:id"
          render={props => <ChatPage {...props} user={this.state.user}/>}
        />

        <Route
          exact path="/chat"
          render={props => <ChatList user={this.state.user}/>}
        />
        </Switch>

      {/* } else {
        
      } */}
      </div>
    );
  }
}

export default App;
