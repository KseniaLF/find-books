import { Wrapper, Input } from './SearchBox.styled';
// import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { getSearchBook } from 'fetch';
// import { nanoid } from 'nanoid';

// import { SearchOutlined } from '@ant-design/icons';

// import { Select, Space } from 'antd';

import Select from 'react-select';

// const handleChange = value => {
//   console.log(`selected ${value}`);
// };

const options = [
  { value: 'intitle', label: 'title' },
  { value: 'inauthor', label: 'author' },
  { value: 'subject', label: 'subject' },
  { value: 'isbn', label: 'isbn' },
];

export const SearchBox = ({ getVisibleBooks }) => {
  // const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const bookName = searchParams.get('name') ?? '';
  // const [isOpen, setIsOpen] = useState(true);

  // const [books, setBooks] = useState([]);

  // const [optionParams, setOptionParams] = useSearchParams();
  // const optionsParams = searchParams.get('option') ?? '';
  // console.log(optionsParam);
  // console.log(selectedOption.value);
  // const handleInputClick = () => {
  //   setIsOpen(true);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // setIsOpen(false);
    getVisibleBooks(bookName);
    // hlandleSearch(bookName);
    // getVisibleBooks(books);

    // const name = e.target.value;

    // const fetchData = async () => {
    //   // const option = selectedOption;

    //   // console.log(name);

    //   try {
    //     if (name) {
    //       console.log(name);
    //       const data = await getSearchBook(name);
    //       // console.log(name);
    //       console.log(data);
    //       if (data) {
    //         return setBooks(data);
    //       }
    //       return setBooks([]);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchData();
  };

  const handleChangeInput = e => {
    // console.log('handleChangeInput:');
    // e.target.value;
    const name = e.target.value;
    // const nextParams = name !== '' ? { name } : {};
    // setSearchParams(nextParams);

    if (name !== '') {
      const nextParams = { name };
      setSearchParams(nextParams);
    }

    // const fetchData = async () => {
    //   try {
    //     if (name) {
    //       const data = await getSearchBook(name);
    //       // console.log(data);
    //       if (data) {
    //         return setBooks(data);
    //       }
    //       return setBooks([]);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchData();
  };

  const handleChange = selectedOption => {
    const option = selectedOption.value;
    if (option !== '') {
      const nextParams = { option };
      setSearchParams(nextParams);
    }
  };

  return (
    <Wrapper>
      <Select
        placeholder="search by.."
        // value={optionsParam}
        onChange={handleChange}
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width: 150,
            borderRadius: 5,
            // fontSize: 20,
            textTransform: 'lowercase',
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            textTransform: 'lowercase',
          }),
        }}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'rgba(97, 111, 85, 0.57)',
            primary: 'rgb(97, 111, 85)',
          },
        })}
      />

      <form onSubmit={handleSubmit}>
        <Input
          placeholder="find book..."
          autoFocus
          type="text"
          value={bookName}
          onChange={handleChangeInput}
          // onClick={handleInputClick}
        />
      </form>
    </Wrapper>
  );
};
