enum WrapperType {
  AlertWrapper = "AlertWrapper",
}

interface IWrapperConfig {
  [WrapperType.AlertWrapper]?: IAlertWrapperConfig;
}