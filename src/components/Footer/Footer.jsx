import { FooterContainer } from './Footer.styled';
import { BsGithub } from 'react-icons/bs';

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        Created by <a href="https://github.com/KseniaLF">Ksenia</a>
      </div>

      <div>
        <BsGithub />{' '}
        <a href="https://github.com/KseniaLF/find-books">Source code</a>
      </div>
      <div>Built with react and use Google API Books</div>
    </FooterContainer>
  );
};
