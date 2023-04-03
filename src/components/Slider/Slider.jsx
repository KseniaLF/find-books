import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper } from './Slider.styled';
import { Link } from 'react-router-dom';
import { CardWrapper } from 'components/CardWrapper/CardWrapper';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        padding: '100px 10px',
      }}
      onClick={onClick}
    />
  );
}

export const SliderBlock = ({ books }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 500,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          // infinite: true,
          // dots: true,
        },
      },
    ],

    appendDots: dots => (
      <div
        style={{
          maxHeight: 20,
          overflow: 'hidden',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <SliderWrapper>
      <h2> BESTSELLERS</h2>
      <Slider {...settings}>
        {books.map(book => {
          // console.log(book.primary_isbn10);
          return (
            <div key={book.etag}>
              <Link to={`${book.id}`}>
                <CardWrapper book={book} />
              </Link>
            </div>
          );
        })}
      </Slider>
    </SliderWrapper>
  );
};
