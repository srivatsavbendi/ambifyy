import React, { Component } from 'react';
import Header from './components/header';
import LandingHeader from './components/landingheader';

class Landing extends Component {
  render() {
    return (
      <div>
        <LandingHeader/>
        <div className="py-5" style={{ backgroundColor: '#EAEDF1' }}>
            <div className="mt-5 py-5" style={{ backgroundColor: '#EAEDF1' }}>
                <h1 className="fw-bold text-dark mt-5">Welcome to <i>ambify</i></h1>
                <h3 className="m-3 text-muted"><i>Relax, focus, enjoy</i></h3>
                <a href="/home" className="btn btn-primary btn-lg m-2">Get Started</a>
                <button className="btn btn-primary btn-lg m-2"><Link to="/home">Go to Home Page</Link></button>
            </div>
        </div>

        <div className="bg-light p-5">
          <div className="container px-5">
            <div className="row px-5">
              <div className="col-md-8">
                <img src="images/sympathy.png" alt="sound effects" className="img-fluid rounded" />
              </div>
              <div className="col-md-4 text-right p-5">
                <h1 className="fw-bold text-secondary">Customize your ambient experience with relaxing music, sound effects, and an in-built productivity timer</h1>
              </div>
            </div>
          </div>
        </div>

        <div className=" p-5 " style={{ backgroundColor: '#EAEDF1' }}>
          <div className="container px-5" >
            <div className="row px-5">
              <div className="col-md-4 text-left p-5">
                <h1 className="fw-bold text-primary" >Select from a wide range of immersive ambient aesthetics, each designed to help you relax and unwind</h1>
              </div>
              <div className="col-md-8">
                <img src="images/landingmodes1.png" alt="ambient modes" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>


        <div className=" p-5">
          <div className="container px-5">
            <div className="row px-5">
                <div className="col-md-7 py-5">
                    <img src="images/landingdisplay1.png" alt="devices" className="img-fluid rounded" />
                </div>
                <div className="col-md-5 text-right px-5">
                    <h1 className="fw-bold text-dark p-5">Immerse yourself in your ambient experience with a full-screen mode dedicated for TVs and large displays</h1>
                </div>
              
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Landing;
