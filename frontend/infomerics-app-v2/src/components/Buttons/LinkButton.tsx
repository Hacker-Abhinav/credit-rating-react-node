import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  path: string;
}

const LinkButton:React.FC<Props> = (props) => {
  const { children, path } = props;
  return(
    <Button variant="outlined" component={Link} to={path}>
      { children }
    </Button>
  )
}

export default LinkButton;