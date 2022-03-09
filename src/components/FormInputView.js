import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {styles} from '../constants/styles';

const FormInputView = ({id, title, onChangeText, value}) => {
  return (
    <View style={styles.FormInputContainer}>
      <Text style={{flex: 0.6}}>{title} :</Text>
      <TextInput
        value={value}
        onChangeText={text => onChangeText(id,text)}
        style={{backgroundColor: 'red', flex: 1}}
      />
    </View>
  );
};

export default FormInputView;
