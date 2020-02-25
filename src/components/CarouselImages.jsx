import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class CarouselImages extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="/img/carousel1.jpg" />
                    <p className="legend">1</p>
                </div>
                <div>
                    <img src="/img/carousel2.jpg" />
                    <p className="legend">2</p>
                </div>
                <div>
                    <img src="/img/carousel3.jpg" />
                    <p className="legend">3</p>
                </div>
                <div>
                    <img src="/img/casousel4.jpg" />
                    <p className="legend">4</p>
                </div>
                <div>
                    <img src="/img/carousel5.jpeg" />
                    <p className="legend">5</p>
                </div>
            </Carousel>
        );
    }
}

export default CarouselImages;