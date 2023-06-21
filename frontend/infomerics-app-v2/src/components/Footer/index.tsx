import { Grid } from "@mui/material";
import "./Footer.style.css";

interface Props {
  
}

const Footer:React.FC<Props> = (props) => {
  const versionCode = import.meta.env['VITE_APP_BUILD_CODE'];
  return(
    <footer>
      <Grid container>
        <Grid item xs={6}>
          &copy; 2023 All rights reserved. 
          Infomerics Ratings.
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          Version { versionCode }
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer;