// Functionalities done by the below commented statements are replaced by using IndexLink
import React from "react";
import { Link, IndexLink } from "react-router";
import Home from "./home";
import Footer from "./footer";
import Header from "./header";

export default class Layout extends React.Component{
  render(){
    var LinkStyle={
      padding: '20px'
    };
    return(
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
