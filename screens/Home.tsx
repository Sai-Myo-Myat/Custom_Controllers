import React, { LegacyRef, Ref, useEffect, useRef } from 'react';
import {useFormContext} from 'react-hook-form';
import {Text, TextInputProps, View} from 'react-native';
import ForwardForm from './ForwardForm';

// type Ref = LegacyRef<TextInputProps> | undefined

const Home = () => {
  const {getValues} = useFormContext();
  const {isChecked} = getValues();
  const ref = useRef<Ref<TextInputProps>>(null)

  useEffect(() => {
    console.log("this is ref", ref.current)
  },[])

  return (
    <View>
      <Text>{isChecked ? "You've accepted!" : "You didn't accepted!!!"}</Text>
      <ForwardForm placeholder="name" ref={ref}/>
    </View>
  );
};

export default Home;
