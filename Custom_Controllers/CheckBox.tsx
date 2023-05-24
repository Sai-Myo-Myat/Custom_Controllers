//dependencies
import React, {FC, useCallback, useEffect, useState} from 'react';
import {useController} from 'react-hook-form';
import {Pressable, Text, View} from 'react-native';
import tw from 'twrnc';

//types
import {CheckBoxType} from '../types';

//icons
import {AntDesign} from '@expo/vector-icons';

const CheckBox: FC<CheckBoxType> = props => {
  const {label} = props;
  const [isChecked, setIsChecked] = useState(false);
  const {
    field: {value, onChange},
  } = useController({
    ...props,
  });

  const onChangeX = useCallback(async () => {
    setIsChecked(prev => !prev);
  }, []);

  useEffect(() => {
    onChange(isChecked);
  }, [isChecked, onChange]);

  console.log('value', value, '\n', 'isChecked', isChecked);

  return (
    <View style={[tw`flex-row gap-3 items-center`]}>
      <Pressable onPress={onChangeX}>
        <View style={[tw`border-white border  w-5 h-5`]}>
          <Text style={[tw`text-white`]}>
            {isChecked ? (
              <AntDesign name="check" size={18} color="white" />
            ) : (
              ''
            )}
          </Text>
        </View>
      </Pressable>
      <Text style={[tw`text-white text-lg`]}>{label || 'good'}</Text>
    </View>
  );
};

export default CheckBox;
