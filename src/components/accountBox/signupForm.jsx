import { useFormik } from "formik";
import React, { useContext } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";

import * as yup from "yup";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(3, "Please enter you real name")
    .required("Full name is required!"),
  email: yup.string().email("Please enter a valid email address").required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a stronger password")
    .required(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match"),
    }),
});

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const onSubmit = (values) => {
    
  };

  const formik = useFormik({ 
    initialValues: {fullName: "", 
    email: "", password: "", 
    confirmPassword: ""},
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
});



  return (
    <BoxContainer>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
        <Input 
        name="fullName" 
        placeholder="Full Name" 
        value={formik.values.fullName} 
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
        />
        <FieldError>{formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : "" }</FieldError>
        </FieldContainer>

        <FieldContainer>
        <Input name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange } onBlur = {formik.handleBlur}/>
        <FieldError>{formik.touched.email && formik.errors.email ? formik.errors.email : "" }</FieldError>
        </FieldContainer>
       
        <FieldContainer>
        <Input name="password" type="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur = {formik.handleBlur}/>
        <FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : "" }</FieldError>
        </FieldContainer>
        <FieldContainer>
        <Input name="confirmPassword" type="password" placeholder="Confirm Password" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur = {formik.handleBlur}/>
        <FieldError>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : "" }</FieldError>
        </FieldContainer>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>Signup</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
