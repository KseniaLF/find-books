import { useState } from 'react';
import { Wrapper, Input } from './SearchBox.styled';
// import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
  const optionsParams = searchParams.get('option') ?? '';
  // console.log(searchParams);

  const initialParam = optionsParams && {
    value: optionsParams,
    label: optionsParams,
  };

  const [selectedOption, setSelectedOption] = useState(initialParam);

  const handleSubmit = e => {
    e.preventDefault();
    // setIsOpen(false);
    // console.log(54545454545454545);
    getVisibleBooks(bookName);
  };

  const handleChangeInput = e => {
    // console.log('handleChangeInput:');
    // e.target.value;
    const name = e.target.value;
    // const nextParams = name !== '' ? { name } : {};
    let param = {};

    if (optionsParams && name) {
      param = { option: optionsParams, name: name };
    } else {
      param = name && { name: name };
    }

    setSearchParams(param);
    // handle(nextParams);
    // if (name !== '') {
    //   const nextParams = { name };
    //   setSearchParams(nextParams);
    // }

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
    // console.log(selectedOption);
    const option = selectedOption.value;
    setSelectedOption(selectedOption);
    // const nextParams = option !== '' ? { option } : {};
    // setSearchParams({ option: option, name: bookName });
    // setSelectedOption(option);

    let param = {};
    if (bookName && option) {
      param = { option: option, name: bookName };
    } else {
      param = option && { option: option };
    }
    setSearchParams(param);
    // handle(nextParams);
  };

  // const handle = ({ option, name }) => {
  //   const params = { name, option };
  //   console.log('params:', params);
  // };

  return (
    <Wrapper>
      <Select
        placeholder="search by.."
        value={selectedOption}
        // defaultValue="g"
        onChange={handleChange}
        // defaultValue={{ label: optionsParams }}
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: 'transparent',
            width: 150,
            borderRadius: 5,
            // fontSize: 20,
            textTransform: 'lowercase',
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            textTransform: 'lowercase',
            // backgroundColor: 'transparent',
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
