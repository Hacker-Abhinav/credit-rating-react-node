import React from "react";
import { Edit } from "@mui/icons-material";

interface Props {
  
}

const IconEdit:React.FC<Props> = (props) => {
  return(
    <React.Fragment>
      <Edit fontSize="small" sx={{ marginRight: '5px' }} />
    </React.Fragment>  
  )
}

export default IconEdit;