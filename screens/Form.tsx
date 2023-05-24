import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useCallback} from 'react';
import {useFormContext} from 'react-hook-form';
import React, {View} from 'react-native';
import tw from 'twrnc';

//types
import {RootStackParamsList} from '../types';

//components
import CustomButton from '../components/CustomButton';
import CheckBox from '../custom_controllers/CheckBox';

const Form = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamsList, 'Form'>>();
  const {control} = useFormContext();

  const goToHome = useCallback(() => {
    navigate('Home');
  }, [navigate]);

  return (
    <View style={[tw`w-full h-full flex gap-3 p-3`]}>
      <CheckBox control={control} name="isChecked" label="Accept all" />
      <CustomButton title="continue" onPressFun={goToHome} />
    </View>
  );
};

export default Form;
