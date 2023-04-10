import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = 'AIzaSyDWU3QtJbgXOpR6_2IC5A8cEUAt27Iu-dw';

export const fetch = async () => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?country=US&q=subject:fiction&orderBy=newest&maxResults=24&langRestrict=en&key=${KEY}`
  );
  // return console.log(response.data);
  return response.data.items;
};

export const getSearchBook = async name => {
  // console.log(name2);

  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${name}&printType=books&maxResults=12&orderBy=newest&key=${KEY}`
  );
  // console.log(response);
  return response.data.items;
};

export const fetchEpub = async name => {
  // console.log(name2);

  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${name}&download=epub&printType=books&maxResults=12&orderBy=newest&key=${KEY}`
  );
  console.log(response);
  // return console.log(response);
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
  console.log(response);
  return response.data.volumeInfo;
};

//www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + "&key=" + apiKey
//www.googleapis.com/books/v1/volumes?q=isbn:1635577926&key=AIzaSyDWU3QtJbgXOpR6_2IC5A8cEUAt27Iu-dw
// export const getBook = async id => {
//   const response = await axios.get(
//     `https://www.googleapis.com/books/v1/volumes?q=isbn:${id}&key=${KEY}`
//   );
//   // return console.log(response.data.items[0].volumeInfo);
//   return response.data.items[0].volumeInfo;
// };

// export const getTrendingBooks = async () => {
//   const response = await axios.get(
//     `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=zwfh67Ft6BfcNZGmAct9aptvX0ObA2hy`
//     // `https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=zwfh67Ft6BfcNZGmAct9aptvX0ObA2hy`
//   );
//   // return console.log(response);
//   return response.data.results;
// };

// https://api.nytimes.com/svc/books/v3/reviews.json?isbn=9780593243732&api-key=zwfh67Ft6BfcNZGmAct9aptvX0ObA2hy
// get rewiews use new york api ^
