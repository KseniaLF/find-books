import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const QuoteContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
`;

export const Quote = styled.div`
  text-transform: uppercase;
  font-size: 35px;
  color: #eb4335;
  font-family: 'Aboreto', cursive;
  margin-bottom: 15px;
`;

export const SearchBtn = styled.div`
  Link {
    text-decoration: none;
  }
  button {
    display: block;
    margin: 0 auto;
    background-color: #242124;
    border: none;
    padding: 15px 40px;
    border-radius: 20px;
    font-size: 17px;
    color: #fff;
    cursor: pointer;
  }
`;
export const SearchBtnLink = styled(Link)`
  text-decoration: none;
`;

export const GenresList = styled.ul`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  li {
    color: #212421;
    padding: 20px;
    width: 200px;
    height: 300px;
    background: linear-gradient(21deg, grey, white);
    border-radius: 10px;
  }
`;

export const BooksImg = styled.div`
  padding: 20px 0;

  img {
    max-height: 300px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
