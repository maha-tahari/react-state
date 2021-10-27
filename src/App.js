import "./App.css";
import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "hari maha",
      bio: "studying in go my code",
      profession: "Full stack Web developer",

      show: true,
      count: 0,
    };
  }
  handleShowPerson = () => this.setState({ show: !this.state.show, count: 0 });
  counteur = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    this.CD = setInterval(() => this.counteur(), 1000);
  }
  render() {
    if (this.state.show)
      return (
        <div className="App">
          <p className="txt">
            Hello my name is {this.state.fullName} I'm in high spirits <br/>
            {this.state.bio} I'm a {this.state.profession} .
          </p>
          <img src="/girl.jpg" alt="it me " className="photo"/> <br />
          <button onClick={this.handleShowPerson} className="btn">click me</button>
          <p>Timer : {this.state.count} second(s)</p>
        </div>
      );
    else
      return (
        <div className="App">
          <h1>Hello world</h1>
          <button onClick={this.handleShowPerson} className="btn">Hello</button>
        </div>
      );
  }
}

export default App;