import React from "react";
import PortfolioModals from "./portfolioModals";

export default class PortfolioSelect extends React.Component{
  render(){
    let portfolioNum = null;
    const { params } = this.props;
    const portfolio_num = params.portfolio_num;

    const PortfolioModal = [
      <PortfolioModals key={1} title={"Portfolio1"} description={"Portfolio1 Description"} image={"cabin.png"} />,
      <PortfolioModals key={2} title={"Portfolio2"} description={"Portfolio2 Description"} image={"cake.png"} />,
      <PortfolioModals key={3} title={"Portfolio3"} description={"Portfolio3 Description"} image={"circus.png"} />,
      <PortfolioModals key={4} title={"Portfolio4"} description={"Portfolio4 Description"} image={"game.png"} />,
      <PortfolioModals key={5} title={"Portfolio5"} description={"Portfolio5 Description"} image={"safe.png"} />,
      <PortfolioModals key={6} title={"Portfolio6"} description={"Portfolio6 Description"} image={"submarine.png"} />
    ];

    if(portfolio_num == '1'){
      portfolioNum = PortfolioModal[0];
    }else if(portfolio_num == '2'){
      portfolioNum = PortfolioModal[1];
    }else if(portfolio_num == '3'){
      portfolioNum = PortfolioModal[2];
    }else if(portfolio_num == '4'){
      portfolioNum = PortfolioModal[3];
    }else if(portfolio_num == '5'){
      portfolioNum = PortfolioModal[4];
    }else if(portfolio_num == '6'){
      portfolioNum = PortfolioModal[5];
    }

    return(
      <div>
        {portfolioNum}
      </div>
    );
  }
}
