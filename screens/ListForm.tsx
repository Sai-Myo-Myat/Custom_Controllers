import React, {useCallback} from 'react';
import {Controller, useFieldArray, useFormContext} from 'react-hook-form';
// import {useFieldArray, useFormContext} from 'react-hook-form';
import {Button, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const ListForm = () => {
  const {control} = useFormContext();
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'inputFields',
  });

  console.log(fields, 'this is field \n');
  // console.log('values ', getValues());
  const appendX = useCallback(() => {
    console.log(fields);
    append({name: '', value: ''});
  }, []);

  const renderInput = useCallback(
    ({field: {value, onChange}}: any) => {
      return (
        <View>
          <Text>{value}</Text>
          <TextInput onChangeText={onChange} placeholder="add item" />
          <Button title="add" onPress={appendX} />
        </View>
      );
    },
    [appendX],
  );

  return (
    <View>
      {fields.map((field, id) => {
        return (
          <Controller
            key={field.id}
            name={`inputFields[${id}].value`}
            render={renderInput}
          />
        );
      })}
    </View>
  );
};

export default ListForm;
