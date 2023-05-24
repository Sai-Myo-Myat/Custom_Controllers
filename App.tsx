import React from 'react';
import {StyleSheet, View} from 'react-native';
import tw from 'twrnc';

//compnents
import Form from './Screens/Form';

export default function App() {
  return (
    <View style={[tw`bg-black`, styles.container]}>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
