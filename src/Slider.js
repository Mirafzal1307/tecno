import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Sl from "./images/logo.png"


class Slider extends Component {
    render() {
        return (
            <div className="container">
                <Carousel>
                    <div>
                        <img src={Sl} />
                    </div>
                    <div>
                        <img src={Sl} />
                    </div>
                    <div>
                        <img src={Sl} />
                    </div>
                    <div>
                        <img src={Sl} />
                    </div>
                    <div>
                        <img src={Sl} />
                    </div>
                </Carousel>
            </div>
        );
    }
} export  default Slider