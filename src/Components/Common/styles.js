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
