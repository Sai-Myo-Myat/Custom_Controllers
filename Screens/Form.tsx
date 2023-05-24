import {useForm} from 'react-hook-form';
import React, {View} from 'react-native';

//types
import {FormInputType} from '../types';

//components
import CheckBox from '../Custom_Controllers/CheckBox';

const Form = () => {
  const {control} = useForm<FormInputType>();
  return (
    <View>
      <CheckBox
        control={control}
        name="isChecked"
        label="Is it help for you?"
      />
    </View>
  );
};

export default Form;
