import { Wrapper, Icon, Input } from './SearchBox.styled';

export const SearchBox = ({ bookName, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        debounceTimeout={1000}
        autoFocus
        type="text"
        value={bookName}
        onChange={e => onChange(e.target.value)}
      />
    </Wrapper>
  );
};
