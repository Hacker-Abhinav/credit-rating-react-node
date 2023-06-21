import React from "react";
import { CardContent, Typography } from "@mui/material";

interface Props {
  text?: string;
}

const ErrorCard:React.FC<Props> = (props) => {
  return(
    <div>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Error
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
      </CardContent>
    </div>
  )
}

export default ErrorCard;