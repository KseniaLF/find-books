import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { DebounceInput } from 'react-debounce-input';

export const Wrapper = styled.div`
  display: flex;
  /* max-width: 400px; */
  /* justify-content: center; */
  align-items: center;
  position: relative;
  text-transform: uppercase;

  max-width: 200px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const Input = styled(DebounceInput)`
  padding: 8px 32px 8px 12px;
  border-radius: 20px;
  border-color: rgb(97, 111, 85);
  font: inherit;
  background-color: transparent;
  outline: none;

  :focus {
    /* outline: 1px solid rgb(97, 111, 85); */
    box-shadow: 0 5px 5px rgb(97, 111, 85);
  }
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 7px;
`;
