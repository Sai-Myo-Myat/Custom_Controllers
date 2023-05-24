export interface FormInputType {
  isChecked: false | true;
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

export type RootStackParamsList = {
  Home: undefined;
  Form: undefined;
};
