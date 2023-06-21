import { useState } from "react";

const useAppAlert = () => {
  const [configAlert, setConfigAlert] = useState<IAlertWrapper|undefined>();

  const presentAlert = (conf:IAlertWrapper) => {
    setConfigAlert(conf);
  }

  const dismissAlert = () => {
    setConfigAlert(undefined);
  }

  return {
    configAlert,
    presentAlert,
    dismissAlert,
  };
};

export default useAppAlert;