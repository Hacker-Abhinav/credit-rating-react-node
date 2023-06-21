import { StandardTextFieldProps, TextField } from "@mui/material";

interface Props extends StandardTextFieldProps {
  formik: any;
  field: string;
  label: string;
}

const InputTextField:React.FC<Props> = (props) => {
  const { formik, field, label } = props;
  return(
    <TextField
      { ...props }
      fullWidth
      id={field}
      name={field}
      label={label}
      value={formik['values'][field]}
      onChange={formik.handleChange}
      error={formik['touched'][field] && Boolean(formik['errors'][field])}
      helperText={formik['touched'][field] && formik['errors'][field]}
    />
  )
}

export default InputTextField;