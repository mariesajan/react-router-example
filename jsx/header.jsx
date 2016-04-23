import React from "react";
import ReactDOM from "react-dom";
import { Link, IndexLink } from "react-router";

export default class Header extends React.Component{
  render(){
    var activeLink = {
      color: "red"
    }
    return(
      <nav id ="top_header" class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand">Start Bootstrap</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="page-scroll">
                      <Link to="/home" activeStyle={activeLink}>Home</Link>
                    </li>
                    <li class="page-scroll">
                      <Link to="/portfolio" activeStyle={activeLink}>Portfolio</Link>
                    </li>
                    <li class="page-scroll">
                      <Link to="/about" activeStyle={activeLink}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}
