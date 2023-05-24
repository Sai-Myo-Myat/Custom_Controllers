import React from 'react';
import {useFormContext} from 'react-hook-form';
import {Text, View} from 'react-native';

const Home = () => {
  const {getValues} = useFormContext();
  const {isChecked} = getValues();
  return (
    <View>
      <Text>{isChecked ? "You've accepted!" : "You didn't accepted!!!"}</Text>
    </View>
  );
};

export default Home;
