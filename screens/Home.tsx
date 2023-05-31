import React, { LegacyRef, useEffect, useRef } from 'react';
import {useFormContext} from 'react-hook-form';
import {Text, TextInputProps, View} from 'react-native';
import ForwardForm from './ForwardForm';

type Ref = LegacyRef<TextInputProps> | undefined

const Home = () => {
  const {getValues} = useFormContext();
  const {isChecked} = getValues();
  const ref = useRef<TextInputProps>(null)

  useEffect(() => {
    console.log("this is ref", ref)
  },[])

  return (
    <View>
      <Text>{isChecked ? "You've accepted!" : "You didn't accepted!!!"}</Text>
      <ForwardForm placeholder="name" ref={ref as Ref | any}/>
    </View>
  );
};

export default Home;
