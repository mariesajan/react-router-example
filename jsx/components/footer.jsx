import React from "react";

export default class Footer extends React.Component{
  render(){
    return(
      <footer class="text-center">
        <div class="footer-above">
            <div class="container">
                <div class="row">
                    <div>
                        <h3>Location</h3>
                        <p>3481 Melrose Place<br/>Beverly Hills, CA 90210</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        Copyright &copy; Your Website 2014
                    </div>
                </div>
            </div>
        </div>
      </footer>
    );
  }
}
