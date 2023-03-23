import { Wrapper, Icon, Input } from './SearchBox.styled';

export const SearchBox = ({ bookName, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        autoFocus
        type="text"
        value={bookName}
        onChange={e => onChange(e.target.value)}
      />
    </Wrapper>
  );
};
