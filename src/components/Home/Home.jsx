import { Button } from 'components/Button/Button';
import { GirlReader, HeaderImg, Main, Quote } from './Home.styled';
import { SliderBlock } from 'components/Slider/Slider';
import { useEffect, useState } from 'react';
import { fetch } from 'fetch';
import { Link } from 'react-router-dom';
import { Container } from 'components/App/App.styled';

import { CgArrowLongRight } from 'react-icons/cg';
import { RiSearch2Line } from 'react-icons/ri';

export const HomeHeader = () => {
  return (
    <HeaderImg>
      <h1>A sofa, a good book, and you</h1>
      <Link to="/search">
        <Button>
          <p>
            {' '}
            <RiSearch2Line size="25px" />
            find your next book now
          </p>
        </Button>
      </Link>
      {/* <div
        style={{
          // background: 'rgba(250, 250, 250, 0.389)',
          // height: 100,
          width: 300,
          color: '#fff',
        }}
      > */}
      {/* <p>
        <p> Welcome to our website!</p>{' '}
        <p>
          Here you will find a huge selection of books for all tastes. We offer
          a convenient search by author, title, and category, so you can easily
          find the book you need.
        </p>{' '}
        <p>
          {' '}
          In addition, we offer a unique opportunity to create your own
          collection of books. You can also share your book reviews with other
          readers.{' '}
        </p>{' '}
        <p>
          {' '}
          To start using all the features of our site, just register and start
          searching for your favorite books now!
        </p>
      </p> */}

      {/* </div> */}
    </HeaderImg>
  );
};

export const HomeMain = () => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch();
        // console.log(data);
        if (data) {
          setBestsellers(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {' '}
      <Quote>
        <span>
          “you can get lost in any library, no matter the size. but the more
          lost you are, the more things you’ll find.”
        </span>
        <p>Millie Florence, Lydia Green Of Mulberry Glen </p>
      </Quote>{' '}
      <Container>
        <GirlReader>
          <div>
            <p>A book is a gift you can open again and again</p>
            <p>
              Unlike other gifts, a book can continue to provide inspiration
              each time it is opened.
            </p>

            <Link to="/search">
              <div>
                <CgArrowLongRight size="50px" />
                <p>find a gift for yourself now</p>
              </div>
            </Link>
          </div>
        </GirlReader>
      </Container>
      <Main>
        <Container>
          <ul>
            <li>
              <SliderBlock books={bestsellers}>
                Check out our Bestsellers list:
              </SliderBlock>
            </li>
          </ul>
        </Container>
        {/* <li>
        <SliderBlock books={bestsellers}>Fiction</SliderBlock>
      </li> */}
      </Main>
    </>
  );
};
