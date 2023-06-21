import React from "react";
import { Box } from "@mui/material";

import './Labels.style.css';

interface Props {
  children: React.ReactNode;
}

const LabelPrimary:React.FC<Props> = (props) => {
  const { children } = props;
  return(
    <Box className="label label__primary">
      { children }
    </Box>
  )
}

export default LabelPrimary;