export interface FormInputType {
  isChecked: false | true;
  isGood: true;
}

export interface CheckBoxType {
  control: any;
  name: string;
  label: string;
}

export interface CustomBtnType {
  title: string;
  onPressFun: () => void;
}

export interface RootStackParamsList {
  Home: undefined;
}
