import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';

//types
import CheckBox from './Custom_Controllers/CheckBox';
import {FormInputType} from './types';

export default function App() {
  const {control} = useForm<FormInputType>();
  return (
    <View style={styles.container}>
      <CheckBox
        control={control}
        label="Is it help for you?"
        isChecked={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
