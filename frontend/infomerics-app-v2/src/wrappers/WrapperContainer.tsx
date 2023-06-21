import React from "react";
import AlertWrapper from "./AlertWrapper";

interface Props {
  wrappers: IWrapperConfig;
}

const WrapperContainer:React.FC<Props> = (props) => {
  const { wrappers } = props;

  return(
    <React.Fragment>
      {
        wrappers['AlertWrapper'] &&
        wrappers['AlertWrapper']['configAlert'] &&
        <AlertWrapper { ... wrappers['AlertWrapper']} />
      }
    </React.Fragment>
  )
}

export default WrapperContainer;