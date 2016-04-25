import React from "react";
import Footer from "./footer";
import Header from "./header";

export default class Layout extends React.Component{
  componentDidUpdate(){
    window.scrollTo(0,0); //Scroll to top of the page after routing
  }

  render(){
    return(
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
