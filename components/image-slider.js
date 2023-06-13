import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import img1 from "../public/images/slider-pic-1.jpeg";
import img2 from "../public/images/slider-pic-2.jpeg";
import img3 from "../public/images/slider-pic-3.jpeg";
import img4 from "../public/images/slider-pic-4.jpeg";
import img5 from "../public/images/slider-pic-5.jpeg";

function ImageSlider() {
  const slides = [img1, img2, img3, img4, img5];
  const bgStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  return (
      <Slider className="h-16 slider" autoplay={2000}>
        {slides.map((slide, index) => (
          <div key={index} className="h-16" style={{backgroundImage: 'url(' + slide.src + ')', ...bgStyle}}>
            {/* <Image
              src={slide}
              alt={`slide-${index + 1}`}
              className="w-100 h-100"
            /> */}
          </div>
        ))}
      </Slider>
  );
}

export default ImageSlider;
