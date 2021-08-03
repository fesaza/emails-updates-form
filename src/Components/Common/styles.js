import styled from "styled-components";
import { ErrorMessage } from "formik";
import texture from "../../Assets/texture.png";

export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-style: italic;
  margin: 12px;
`;

export const AppContainer = styled.div`
  padding: 12px;
  background: url("${texture}");
  height: 70vh;
  width: 60%;
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  cursor: grab;
`;