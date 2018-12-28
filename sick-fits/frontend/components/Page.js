import React, { Component } from "react";
import Header from "../components/Header";

export default class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
