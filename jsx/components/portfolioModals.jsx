import React from "react";
import { Link } from "react-router";

export default class PortfolioModals extends React.Component{

  render(){
    const { title } = this.props;
    const { description } = this.props;
    const { image } = this.props;
    const imagePath = "../img/portfolio/" + image;
    return(
      <section>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="modal-body">
                                <h2 class="header_style">Portfolio Details</h2>
                                <hr class="star-primary" />
                                <img src={imagePath} class="img-responsive img-centered" alt="" />
                                <br />
                                <p>Title: {title}</p>
                                <p>Description: {description}</p>
                                <Link to="/portfolio" class="btn btn-default"><i class="fa fa-times"></i>Close</Link>
                            </div>
                        </div>
                    </div>
                </div>
          </section>

    );
  }
}
