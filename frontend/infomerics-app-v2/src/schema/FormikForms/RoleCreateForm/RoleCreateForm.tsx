import { useFormik } from "formik";
import { ROLE_CREATE_FORM_VALIDATOR } from "./validator";

const ROLE_CREATE_FORM = () => {
  return useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: ROLE_CREATE_FORM_VALIDATOR,
    validateOnChange: false,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
}

export {
  ROLE_CREATE_FORM,
}