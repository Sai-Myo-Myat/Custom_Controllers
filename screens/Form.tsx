import {useForm} from 'react-hook-form';
import React, {Button, View} from 'react-native';
import tw from 'twrnc';

//types
import {FormInputType} from '../types';

//components
import CheckBox from '../custom_controllers/CheckBox';

const Form = () => {
  const {control} = useForm<FormInputType>();
  return (
    <View style={[tw`w-full h-full flex gap-3`]}>
      <CheckBox control={control} name="isChecked" label="Accept all" />
      <Button title="continue" />
    </View>
  );
};

export default Form;
