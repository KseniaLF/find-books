import {
  CardWrapper,
  Container,
  ProductName,
} from 'components/BooksList/BookList.styled';

export const BookList = ({ books }) => {
  return (
    <Container>
      {books.map(product => {
        return (
          <CardWrapper key={product.id}>
            <div>
              {/* <img src="https://via.placeholder.com/200x100" alt="" /> */}

              <img src={product.volumeInfo.imageLinks.thumbnail} alt="book" />
              <ProductName>{product.volumeInfo.title}</ProductName>
            </div>
          </CardWrapper>
        );
      })}
    </Container>
  );
};
