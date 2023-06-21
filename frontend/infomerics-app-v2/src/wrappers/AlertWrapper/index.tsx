import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface Props {
  configAlert: IAlertWrapper|undefined;
  dismissAlert: any;
}

const AlertWrapper:React.FC<Props> = (props) => {
  const { configAlert, dismissAlert } = props;
  const [ open, setOpen ] = useState(false);

  const handleClose = () => {
    setOpen(false);
    dismissAlert(undefined);
  }

  useEffect(() => {
    if (configAlert) {
      setOpen(true);
    }
  }, [configAlert]);

  if (!configAlert) {
    return null
  };

  return(
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          { configAlert['title'] }
        </DialogTitle>
        
        <DialogContent>
          <DialogContentText>
          { configAlert['body'] }
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default AlertWrapper;