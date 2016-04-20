import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import Contact from "./contact";
import Portfolio from "./portfolio";
import About from "./about";
import Layout from "./layout";
import Home from "./home";

const app = document.getElementById('app');
const header =document.getElementById('app_header');

ReactDOM.render(
    <Router history= {browserHistory} >
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path ="/about" component={About} />
      </Route>
    </Router>,
     app);
