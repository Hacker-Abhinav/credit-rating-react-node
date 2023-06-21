import React from "react";
import { Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const LabelTitle:React.FC<Props> = (props) => {
  const { children } = props;
  return(
    <Typography>
      { children }
    </Typography>
  )
}

export default LabelTitle;