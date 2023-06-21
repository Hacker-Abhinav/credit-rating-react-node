import React from "react";
import { Box } from "@mui/material";

import './Buttons.style.css';

interface Props {
  children: React.ReactNode;
}

const ActionButtonGroup:React.FC<Props> = (props) => {
  const { children } = props;
  return(
    <Box className="box__action_button_group">
      { children }
    </Box>
  )

}

export default ActionButtonGroup;