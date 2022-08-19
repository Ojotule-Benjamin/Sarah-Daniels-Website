import { Carousel } from "react-bootstrap";
import carouseImage1 from "../../assets/svgs/carouseImage1.svg";
import carouseImage2 from "../../assets/svgs/carouseImage2.svg";
import carouseImage3 from "../../assets/svgs/carouseImage3.svg";
import "./carouselsection.scss";

export const CarouselSection = () => {
  return (
    <div className="carouselMain">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={carouseImage1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>White Wedding</h3>
            <p>We got what it takes.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={carouseImage2}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={carouseImage3}
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

      {/* <div className="test">
        <h4>we can provide anything</h4>
      </div> */}

      <div className="discount">
        <h4>ORDER Full Package Plan & Get - 25% discount</h4>
        <button type="submit">SEND REQUEST</button>
      </div>
    </div>
  );
};
