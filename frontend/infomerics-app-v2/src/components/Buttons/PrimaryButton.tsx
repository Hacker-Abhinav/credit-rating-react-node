import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {}

const PrimaryButton:React.FC<Props> = (props) => {
  const { children } = props;
  return(
    <Button variant="contained" {...props}>
      { children }
    </Button>
  )

}

export default PrimaryButton;