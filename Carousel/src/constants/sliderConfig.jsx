
const CustomNextArrow = ({ className, style, onClick, currentSlide, slideCount, ...props }) => (
  <div
    className={`${className} next-slick-arrow hover:scale-110 transition-transform duration-200`}
    style={{ ...style }}
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24">
      <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
    </svg>
  </div>
);

const CustomPrevArrow = ({ className, style, onClick, currentSlide, slideCount, ...props }) => (
  <div
    className={`${className} next-slick-arrow rotate-180 hover:scale-110 transition-transform duration-200`}
    style={{ ...style }}
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24">
      <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
    </svg>
  </div>
);

export const SLIDER_CONFIG = {
  lazyLoad: "ondemand",
  accessibility: true,
  dots: false,
  speed: 500, 
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3000, 
  cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", 
  useCSS: true, 
  useTransform: true, 
  swipeToSlide: true, 
  touchThreshold: 10, 
  variableWidth: false, 
  centerMode: false, 
  
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        speed: 400, 
        touchThreshold: 5, 
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        speed: 450, 
      },
    },
  ],
};