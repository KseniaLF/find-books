import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = 'AIzaSyDWU3QtJbgXOpR6_2IC5A8cEUAt27Iu-dw';

export const fetch = async () => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?country=US&q=subject:fiction&orderBy=newest&maxResults=12&key=${KEY}`
  );
  // return console.log(response.data);
  return response.data.items;
};
// inauthor:tolstoy
// export const fetch = async () => {
//   const response = await axios.get(
//     `https://www.googleapis.com/books/v1/volumes?&key=${KEY}`,
//     {
//       params: {
//         q: 'kings',
//         orderBy: 'newest',
//       },
//     }
//   );

// https://books.google.com/books/content?id=_Qh7EAAAQBAJ&printsec=frontcover&img=1&zoom=10&source=gbs_api

export const getBook = async id => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${KEY}`
  );
  // return console.log(response);
  return response.data.volumeInfo;
};
