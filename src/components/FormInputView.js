import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../constants/Colors";
import { iconSize, styles } from "../constants/styles";
import { SHeight, SWidth } from "../constants/Utls";

const FormInputView = ({
  id,
  title,
  onChangeText,
  value,
  isDropDown,
  openDropDown,
  isDateSelector,
  openDateSelector,
  maxLengthProp,
  keyboardTypeProp,
  style,
  containerStyle,
}) => {
  return (
    <View style={[styles.FormInputContainer, containerStyle]}>
      {title && <Text style={{ flex: 0.6 }}>{title} :</Text>}
      {isDropDown ? (
        <TouchableOpacity
          onPress={openDropDown}
          style={[styles.formInputStyle, style]}
        >
          <Text>{value || title}</Text>
          <Icon name={"chevron-down"} size={iconSize} />
        </TouchableOpacity>
      ) : isDateSelector ? (
        <TouchableOpacity
          onPress={openDateSelector}
          style={[styles.formInputStyle, style]}
        >
          <Text>{value || title}</Text>
          <Icon name={"calendar-month"} size={25} />
        </TouchableOpacity>
      ) : (
        <TextInput
          value={value}
          onChangeText={(text) => onChangeText(id, text)}
          maxLength={maxLengthProp || undefined}
          keyboardType={keyboardTypeProp || "default"}
          placeholder={"Enter " + title}
          style={{
            height: SHeight(7),
            backgroundColor: Colors.white,
            elevation: 5,
            zIndex: 5,
            borderRadius: SWidth(1),
            flex: 1,
          }}
        />
      )}
    </View>
  );
};

export default FormInputView;
