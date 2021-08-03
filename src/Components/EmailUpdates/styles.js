import styled from "styled-components";
import { Button } from "../Common/styles";

export const Container = styled.div`
    width: auto;
    margin: auto;
`;

export const Header = styled.div`
    margin: 0 0 2em;
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

export const SubmitButton = styled(Button)`
  background-color: #803193;
  color: white;
`;

export const CheckInput = styled.input``;
