import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    margin: auto;
`;

export const Title = styled.h1`
  color: #040404;
`;

export const SubTitle = styled.span`
  color: #686868;
  font-size: 18px;
`;

export const Row = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
  }
`;

export const Input = styled.input`
  height: 3em;
  border: 3px solid ${(props) => (props.hasErrors ? "red" : "#d7eceb")};
  width: 90%;
  &:focus {
    border: 3px solid #a3d1cd;
    outline: none;
  }
`;

export const SelectInput = styled.select`
  height: 3em;
  border: 3px solid ${(props) => (props.hasErrors ? "red" : "#d7eceb")};
  width: 80%;
  &:focus {
    border: 3px solid #a3d1cd;
    outline: none;
  }
`;

export const Button = styled.button`
  height: 3em;
  margin: 12px;
  min-width: 150px;
  border-radius: 3em;
  box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%),
    0 2px 4px -1px rgb(0 0 0 / 40%);
  background-color: white;
  border-color: rgb(0 0 0 / 12%);
`;

export const SubmitButton = styled(Button)`
  background-color: #803193;
  color: white;
`;

export const CheckInput = styled.input``;
