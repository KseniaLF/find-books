// import { CardWrapper, Container, ProductName } from './ProductList.styled';

import {
  CardWrapper,
  Container,
  ProductName,
} from 'components/ProductList/ProductList.styled';

export const BookList = ({ products }) => {
  return (
    <Container>
      {products.map(product => {
        return (
          <CardWrapper key={product.id}>
            <div>
              <img src="https://via.placeholder.com/200x100" alt="" />
              <ProductName>{product.name}</ProductName>
            </div>
          </CardWrapper>
        );
      })}
    </Container>
  );
};
