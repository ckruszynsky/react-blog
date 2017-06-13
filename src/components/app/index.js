import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="ui inverted fixed menu">
          <div className="ui container">
            <a href="/" className="header item">
              <img src={logo} className="logo App-logo" alt="logo" />
              React-Blog
            </a>
          </div>
        </div>
        <div className="ui main text container">
          {this.props.children}
        </div>        
      </div>
    );
  }
}

export default App;
