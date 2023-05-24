import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import tw from 'twrnc';

//types
import {CustomBtnType} from '../types';

const CustomButton: FC<CustomBtnType> = ({title, onPressFun}) => {
  return (
    <Pressable
      style={[
        tw`w-full flex justify-center items-center bg-blue-500 p-3 rounded-lg`,
      ]}
      onPress={onPressFun}>
      <Text style={[tw`text-white text-sm`]}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
