import React from "react";

export default class Contact extends React.Component{
  render(){
    return(
      <section id="contact">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <h2>Contact Me</h2>
                      <hr class="star-primary" />
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-8 col-lg-offset-2">
                      <form name="sentMessage" id="contactForm" novalidate>
                          <div class="row control-group">
                              <div class="form-group col-xs-12 floating-label-form-group controls">
                                  <label>Name</label>
                                  <input type="text" class="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                                  <p class="help-block text-danger"></p>
                              </div>
                          </div>
                          <div class="row control-group">
                              <div class="form-group col-xs-12 floating-label-form-group controls">
                                  <label>Email Address</label>
                                  <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                                  <p class="help-block text-danger"></p>
                              </div>
                          </div>
                          <div class="row control-group">
                              <div class="form-group col-xs-12 floating-label-form-group controls">
                                  <label>Phone Number</label>
                                  <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number."/>
                                  <p class="help-block text-danger"></p>
                              </div>
                          </div>
                          <div class="row control-group">
                              <div class="form-group col-xs-12 floating-label-form-group controls">
                                  <label>Message</label>
                                  <textarea rows="5" class="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                  <p class="help-block text-danger"></p>
                              </div>
                          </div>
                          <br />
                          <div id="success"></div>
                          <div class="row">
                              <div class="form-group col-xs-12">
                                  <button type="submit" class="btn btn-success btn-lg">Send</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}