import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Colors } from "../constants/Colors";
import { styles } from "../constants/styles";
import { SWidth } from "../constants/Utls";

const FormInputView = ({ id, title, onChangeText, value }) => {
  return (
    <View style={styles.FormInputContainer}>
      <Text style={{ flex: 0.6 }}>{title} :</Text>
      <TextInput
        value={value}
        onChangeText={(text) => onChangeText(id, text)}
        style={{
          backgroundColor: Colors.white,
          elevation: 5,
          zIndex: 5,
          borderRadius: SWidth(1),
          flex: 1,
        }}
      />
    </View>
  );
};

export default FormInputView;
