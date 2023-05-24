//dependencies
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

//components
import Form from './screens/Form';
import Home from './screens/Home';

//types
import {FormInputType} from './types';

const Stack = createNativeStackNavigator();

export default function App() {
  const methods = useForm<FormInputType>();
  return (
    <FormProvider {...methods}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Form">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
      </NavigationContainer>
    </FormProvider>
  );
}
