import React from "react";
import { Link } from "react-router";

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state ={collapsed:true};
  }
    toggleCollapse(){
      const collapsed = !this.state.collapsed;
      this.setState({collapsed});
  }
  render(){
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    var activeLink = {
      color: "red"
    }
    return(
      <nav id ="top_header" class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} href ="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand">Start Bootstrap</a>
            </div>
            <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="page-scroll">
                      <Link to="/home" onClick={this.toggleCollapse.bind(this)} activeStyle={activeLink}>Home</Link>
                    </li>
                    <li class="page-scroll">
                      <Link to="/portfolio" onClick={this.toggleCollapse.bind(this)} activeStyle={activeLink}>Portfolio</Link>
                    </li>
                    <li class="page-scroll">
                      <Link to="/about" onClick={this.toggleCollapse.bind(this)} activeStyle={activeLink}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}
