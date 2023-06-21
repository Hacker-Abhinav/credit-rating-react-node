import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { WrapperContainer } from "@/wrappers";
import { SET_TITLE } from "@/helpers/Base";
import { Breadcrumb, Footer, Header, Sidebar } from "@/components";
import LabelPrimary from "@/components/Labels/LabelPrimary";

interface Props {
  children: React.ReactNode;
  title: string;
  breadcrumbs: IBreadcrumb[];
  actionButtons: any;
  wrappers: IWrapperConfig|undefined;
}

const AppLayout:React.FC<Props> = (props) => {
  const { children, title, breadcrumbs, actionButtons, wrappers } = props;

  useEffect(() => {
    SET_TITLE(title);
  }, [title]);

  return(
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        
        <Grid item xs={4} lg={2}>
          <Sidebar />
        </Grid>

        <Grid item xs={8} lg={10} sx={{ minHeight: '90vh' }}>
          <Grid container className="container__content" >
            
            <Grid item xs={8}>
              <Breadcrumb breadcrumbs={breadcrumbs} />
              <LabelPrimary>{ title }</LabelPrimary>
            </Grid>
            <Grid item xs={4}>
              { actionButtons() }
            </Grid>

            <Grid item xs={12}>
              { children }
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>

      { wrappers && <WrapperContainer wrappers={wrappers} /> }
    </Box>
  )
}

export default AppLayout;