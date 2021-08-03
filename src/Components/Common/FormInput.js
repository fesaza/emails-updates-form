import React from "react";
import styled from "styled-components";
import { ErrorText } from "./styles";

const FormInputContainer = styled.div`
  @media (min-width: 768px) {
    flex: 0 0 50%;
  }
`;

const InputContainer = styled.div`
  margin: 12px;
  width: 100%;
`;

const Label = styled.label`
  margin: 12px;
  font-size: bold;
  font-weight: 400;
`;

const FormInput = ({ children, name, label, checkbox }) => {
  return (
    <FormInputContainer>
      <ErrorText name={name} component="div" />
      {!checkbox && <Label htmlFor={name}>{label}</Label>}
      <InputContainer>
        {children}
        {checkbox && <Label htmlFor={name}>{label}</Label>}
      </InputContainer>
    </FormInputContainer>
  );
};

export default FormInput;
