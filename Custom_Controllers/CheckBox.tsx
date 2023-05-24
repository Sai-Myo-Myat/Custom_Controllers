//dependencies
import React, {FC} from 'react';
import {Text, View} from 'react-native/types';

//types
import {CheckBoxType} from '../types';

const CheckBox: FC<CheckBoxType> = ({label, isChecked}) => {
  return (
    <View>
      <View>{isChecked ? 'checked' : ''}</View>
      <Text>{label}</Text>
    </View>
  );
};

export default CheckBox;
