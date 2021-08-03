import React from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import {
  CheckInput,
  Container,
  Input,
  Row,
  SelectInput,
  SubmitButton,
  SubTitle,
  Title,
} from "./styles";
import FormInput from "../Common/FormInput";
import { Button, ErrorText } from "../Common/styles";
import useStore from "../../Stores/store";

const initialValues = {
  firstName: "",
  email: "",
  lastName: "",
  organization: "",
  euResident: "",
  options: [],
};

const formSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  organization: yup.string(),
  euResident: yup.string().required("EU Resident is required"),
  options: yup.array().min(1, "Please choose one option"),
});

const euResidentOptions = [
  { value: "", description: "- SELECT AN OPTION -" },
  { value: "Yes", description: "YES" },
  { value: "No", description: "NO" },
];

const EmailUpdatesForm = () => {
  const signUp = useStore((state) => state.signUp);
  return (
    <Container>
      <Title>Sign up for email updates</Title>
      <SubTitle>*Indicates required Field</SubTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          await signUp(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          setFieldValue,
          resetForm,
        }) => {
          const onChangeCheck = (option) => (e) => {
            const newOptions = [...values.options];
            if (e.target.checked) {
              newOptions.push(option);
            } else {
              const indexOf = newOptions.indexOf(option);
              if (indexOf !== -1) {
                newOptions.splice(indexOf, 1);
              }
            }

            setFieldValue("options", newOptions);
          };
          return (
            <Form>
              <Row>
                <FormInput name="firstName" label="FIRST NAME*">
                  <Input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    hasErrors={
                      errors.firstName && touched.firstName && errors.firstName
                    }
                  />
                </FormInput>
                <FormInput name="lastName" label="LAST NAME*">
                  <Input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    hasErrors={
                      errors.lastName && touched.lastName && errors.lastName
                    }
                  />
                </FormInput>
              </Row>
              <Row>
                <FormInput name="email" label="EMAIL ADDRESS*">
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    hasErrors={errors.email && touched.email && errors.email}
                  />
                </FormInput>
                <FormInput name="organization" label="ORGANIZATION">
                  <Input
                    type="text"
                    name="organization"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.organization}
                  />
                </FormInput>
              </Row>
              <Row>
                <FormInput name="euResident" label="EU RESIDENT*">
                  <SelectInput
                    name="euResident"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.euResident}
                  >
                    {euResidentOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.description}
                      </option>
                    ))}
                  </SelectInput>
                  <div />
                </FormInput>
              </Row>
              <ErrorText name="options" component="div" />
              <Row>
                <FormInput name="advances" label="ADVANCES" checkbox>
                  <CheckInput
                    type="checkbox"
                    id="advances"
                    value={
                      values.options && values.options.includes("advances")
                    }
                    onChange={onChangeCheck("advances")}
                  />
                </FormInput>
                <FormInput name="alerts" label="ALERTS" checkbox>
                  <CheckInput
                    type="checkbox"
                    id="alerts"
                    value={values.options && values.options.includes("alerts")}
                    onChange={onChangeCheck("alerts")}
                  />
                </FormInput>
              </Row>
              <Row>
                <FormInput
                  name="communication"
                  label="OTHER COMMUNICATIONS"
                  checkbox
                >
                  <CheckInput
                    type="checkbox"
                    id="communication"
                    value={values.options && values.options.includes("other")}
                    onChange={onChangeCheck("other")}
                  />
                </FormInput>
              </Row>
              <Row>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  SUBMIT
                </SubmitButton>
                <Button
                  disabled={isSubmitting}
                  onClick={() => resetForm(initialValues)}
                >
                  RESET
                </Button>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default EmailUpdatesForm;
