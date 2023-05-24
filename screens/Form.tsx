import {useForm} from 'react-hook-form';
import React, {View} from 'react-native';
import tw from 'twrnc';

//types
import {FormInputType, RootStackParamsList} from '../types';

//components
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import CheckBox from '../custom_controllers/CheckBox';

const Form = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamsList, 'Home'>>();
  const {control} = useForm<FormInputType>();

  return (
    <View style={[tw`w-full h-full flex gap-3 p-3`]}>
      <CheckBox control={control} name="isChecked" label="Accept all" />
      <CustomButton title="continue" onPressFun={null} />
    </View>
  );
};

export default Form;
