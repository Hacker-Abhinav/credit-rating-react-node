import { object, string } from "yup";

const ROLE_CREATE_FORM_VALIDATOR = object({
  email: string().email('Enter a valid email').required('Email is required'),
  password: string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

export {
  ROLE_CREATE_FORM_VALIDATOR,
}