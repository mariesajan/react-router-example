import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from "react-router";
import Portfolio from "./portfolio";
import About from "./about";
import Layout from "./layout";
import Home from "./home";
import PortfolioSelect from "./portfolioSelect";

const app = document.getElementById('app');
const header =document.getElementById('app_header');

ReactDOM.render(
    <Router history= {browserHistory} >
      <Route path="/" component={Layout}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Home} />
        <Route path ="about" component={About} />
        <Route path="portfolio">
          <IndexRoute component={Portfolio} />
          <Route path=":portfolio_num" component={PortfolioSelect} />
        </Route>
      </Route>
    </Router>,
     app);
