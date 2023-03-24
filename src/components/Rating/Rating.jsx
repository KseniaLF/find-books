import { Rate } from 'antd';

import { useEffect, useState } from 'react';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export const Rating = ({ rate }) => {
  return (
    <span>
      Rating: <Rate disabled defaultValue={rate} />
      {/* <Rate tooltips={desc} onChange={setValue} value={value} /> */}
      {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
    </span>
  );
};

const getInitialRate = isbnBook => {
  const rate = JSON.parse(localStorage.getItem('rate'));
  // console.log(rate);

  if (rate) {
    const filteredArr = rate.filter(e => e.isbnBook === isbnBook);

    if (filteredArr.length > 0) {
      return filteredArr[0].value;
    }
  }

  return 0;
};

export const YourRating = ({ isbnBook }) => {
  const [value, setValue] = useState(getInitialRate(isbnBook));
  const [rating, setRating] = useState([]);

  // console.log('rating:', rating);

  useEffect(() => {
    const rate = JSON.parse(localStorage.getItem('rate'));
    if (rate) {
      const filteredArr = rate.filter(e => e.isbnBook !== isbnBook);
      // console.log(filteredArr);

      setRating([...filteredArr, { isbnBook, value }]);
    } else {
      setRating([{ isbnBook, value }]);
    }
  }, [isbnBook, value]);

  useEffect(() => {
    if (value !== 0) {
      localStorage.setItem('rate', JSON.stringify(rating));
    }
  }, [rating, value]);

  return (
    <span>
      Your rating: <Rate tooltips={desc} onChange={setValue} value={value} />
    </span>
  );
};
