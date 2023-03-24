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

const getInitialRate = () => {
  const rate = localStorage.getItem('rate');

  if (rate) {
    return JSON.parse(rate);
  }
  return 0;
};

export const YourRating = () => {
  const [value, setValue] = useState(getInitialRate);

  useEffect(() => {
    localStorage.setItem('rate', JSON.stringify(value));
  }, [value]);

  return (
    <span>
      Your rating: <Rate tooltips={desc} onChange={setValue} value={value} />
    </span>
  );
};
