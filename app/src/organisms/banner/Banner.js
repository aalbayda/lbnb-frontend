import Carousel from 'react-bootstrap/Carousel';
import "./banner.css";
import {banner1, banner2, banner3} from "../../assets/images";

function Banner() {
  return (
    // <div>
    //      <img
    //          className="d-block w-100"
    //          src={banner2}
    //          alt="First slide"
    //     />    
    // </div>
    <div class="carousel-body">
        <Carousel fade={true} controls={false}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
            />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
            />

            {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
            />

            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Banner;