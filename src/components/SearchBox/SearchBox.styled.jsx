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

  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 16px;

  form {
    width: 100%;
  }

  ul {
    position: absolute;
    z-index: 99;
    left: 0;
    top: 45px;
    width: 100%;
    background-color: white;
    box-shadow: 0 5px 5px rgb(97, 111, 85);
    border-radius: 5px;
    max-height: 200px;
    height: auto;
    overflow: auto;

    li {
      padding: 5px 10px;
      text-transform: lowercase;

      :hover {
        background-color: #e7ecec;
        cursor: pointer;
      }
    }
  }
`;

export const Input = styled(DebounceInput)`
  width: 100%;
  /* height: 45px; */
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
