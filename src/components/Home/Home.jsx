import { Button } from 'components/Button/Button';
import { HeaderImg, Main } from './Home.styled';
import { SliderBlock } from 'components/Slider/Slider';
import { useEffect, useState } from 'react';
import { fetch } from 'fetch';

export const HomeHeader = () => {
  return (
    <HeaderImg>
      <h1>A sofa, a good book, and you</h1>

      <Button> find your next book now</Button>
    </HeaderImg>
  );
};

export const HomeMain = () => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch();
        console.log(data);
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
    <Main>
      <li>
        <SliderBlock books={bestsellers}>Fiction</SliderBlock>
      </li>
      <li>
        <SliderBlock books={bestsellers}>Fiction</SliderBlock>
      </li>
    </Main>
  );
};
