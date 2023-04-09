import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
// import { DebounceInput } from 'react-debounce-input';

// import { Input } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  /* flex-wrap: wrap; */
  /* text-align: center; */
  justify-content: center;
  /* align-items: center; */

  /* max-width: 400px; */
  /* justify-content: center; */
  align-items: center;
  position: relative;
  text-transform: uppercase;

  /* max-width: 300px; */
  margin: 0 auto;
  margin-bottom: 16px;

  input {
    /* background-color: red; */
    /* font-size: 80px; */
    /* font-weight: 700; */
  }
  form {
    /* width: 100%; */
    max-width: 250px;
    /* display: flex; */
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

export const Input = styled.input`
  /* font-size: 15px; */
  font: inherit;
  padding: 8px 32px 5px 12px;

  width: 100%;
  /* height: 45px; */
  border-radius: 5px;
  border-color: rgb(97, 111, 85);
  border: 1.5px solid rgb(97, 111, 85);
  outline: none;
  /* background-color: transparent; */
  /* border-radius: 10px; */
  /* padding: 8px 32px 8px 12px; */
  /* width: 100%; */
  /* height: 45px; */
  /* padding: 8px 32px 8px 12px;
  border-color: rgb(97, 111, 85);
  font: inherit;
  background-color: transparent;
  outline: none; */
  /* background-color: red; */

  /* fill: red; */
  /* span { */
  /* :hover {
    border-radius: 20px;
    background-color: transparent;
  } */
  /* border: none; */
  /* :hover { */
  /* border: 5px solid red; */
  /* border-color: red; */
  /* } */
  :focus {
    /* outline: 1px solid rgb(97, 111, 85); */
    box-shadow: 0 5px 5px rgb(97, 111, 85);
    /* border-radius: 20px; */
  }
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 7px;
`;
