import { Link } from "react-router-dom";
import { Box, Breadcrumbs } from "@mui/material";

import './Breadcrumb.style.css';

interface Props {
  breadcrumbs: IBreadcrumb[],
}

const Breadcrumb:React.FC<Props> = (props) => {
  const { breadcrumbs } = props;
  return(
    <Box sx={{ margin: "10px 0" }}>
      <Breadcrumbs>
        {
          breadcrumbs.map((breadcrumb:IBreadcrumb) => {
            return (
              <Link key={breadcrumb['link']} to={breadcrumb['link']} className="breadcrumb__text">
                { breadcrumb['title'] }
              </Link>
            )
          })
        }
      </Breadcrumbs>
    </Box>
  )

}

export default Breadcrumb;