import { Wrapper, Icon, Input } from './SearchBox.styled';
import { useState } from 'react';
// import Select from 'react-select';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchBook } from 'fetch';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useRef } from 'react';

// let arr = [];
// const getInitialBooks = name => {
//   console.log('name:', name);

//   const fetchData = async () => {
//     try {
//       if (name) {
//         const data = await getSearchBook(name);
//         console.log(data);
//         if (data) {
//           arr = data;
//           return;
//         }
//         // return [];
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (name) {
//     console.log('yes');

//     fetchData();
//     console.log(arr);
//     // return arr;
//     // return;
//   }

//   console.log('no');
//   return [];
// };

export const SearchBox = ({ getVisibleBooks }) => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const bookName = searchParams.get('name') ?? '';
  const [isOpen, setIsOpen] = useState(true);

  const [books, setBooks] = useState([]);

  const inputEl = useRef(0);

  // const handleClickSelect = e => {
  //   setIsOpen(!isOpen);
  //   const name = e.target.textContent;
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  //   hlandleSearch(e.target.textContent);
  //   // console.log(bookName);
  // };

  useEffect(() => {
    // let a = inputEl.current;
    // console.log(a);
    // console.log(inputEl.current);
    // if (bookName) {
    // console.log('useEffect');
    // }

    const fetchData = async () => {
      try {
        if (bookName) {
          const data = await getSearchBook(bookName);
          // console.log(data);
          if (data) {
            setBooks(data);

            if (inputEl.current === 0) {
              console.log(0);
              getVisibleBooks(data);
            }
            return;
          }
          return setBooks([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      inputEl.current += 1;
      // console.log(inputEl);
    };
  }, [bookName, getVisibleBooks]);

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
    // hlandleSearch(bookName);
    getVisibleBooks(books);
  };

  // const hlandleSearch = value => {
  //   // console.log(value);
  //   // console.log(books);
  //   // getVisibleBooks(books);
  //   // const fetchData = async () => {
  //   //   try {
  //   //     if (value) {
  //   //       const data = await getSearchBook(value);
  //   //       console.log(data);
  //   //       if (data) {
  //   //         setBooks(data);
  //   //         return;
  //   //       }
  //   //       return setBooks([]);
  //   //     }
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // };
  //   // fetchData();
  // };

  const handleChangeInput = e => {
    // console.log('handleChangeInput:');
    // e.target.value;
    const name = e.target.value;
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    // hlandleSearch(e.target.textContent);
    // console.log(e.target.value);

    // const fetchData = async () => {
    //   try {
    //     if (name) {
    //       const data = await getSearchBook(name);
    //       // console.log(data);
    //       if (data) {
    //         setBooks(data);
    //         return;
    //       }
    //       return setBooks([]);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchData();
  };

  // useEffect(() => {
  //   console.log(books);
  //   // console.log(inputEl.current);
  //   // if (inputEl.current) {
  //   //   getVisibleBooks(inputEl.current);
  //   // }
  // }, [books, getVisibleBooks]);

  return (
    <Wrapper>
      <Icon />
      <form onSubmit={handleSubmit}>
        <Input
          debounceTimeout={1000}
          autoFocus
          type="text"
          value={bookName}
          onChange={handleChangeInput}
          onClick={handleInputClick}
        />
        {bookName && isOpen ? (
          <ul>
            {books.map(book => {
              return (
                <li key={nanoid()}>
                  {/* {book.volumeInfo.title} */}
                  <Link to={`${book.id}`} state={{ from: location }}>
                    {book.volumeInfo.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </form>
    </Wrapper>
  );
};

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

// export const SearchB = () => {
//   const [selectedOption, setSelectedOption] = useState('');
//   // const [value, setSelectedOption] = useState(null);

//   const handleChange = value => {
//     // console.log(value);
//     if (value !== '') {
//       setSelectedOption(value);
//     }
//   };

//   return (
//     <div>
//       <Select
//         isSearchable
//         // value={value}
//         // inputValue={selectedOption}
//         defaultValue={selectedOption}
//         onChange={handleChange}
//         options={options}
//         onInputChange={e => {
//           // if (e !== '') {
//           setSelectedOption(e);
//           // }
//           console.log(e);
//         }}
//         // menuIsOpen={true}
//         // onInputChange={(e, m) => {
//         //   if (e === '') {
//         //     // e.preventDefault();
//         //     console.log(m);
//         //   }
//         // }}
//       />
//     </div>
//   );
// };
