import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
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
  editableProp,
}) => {
  return (
    <View style={[styles.FormInputContainer, containerStyle]}>
      {title && (
        <Text
          style={[
            {
              position: "absolute",
              zIndex: 10,
              top: -10,
              left: SWidth(5),
              backgroundColor: Colors.white,
            },
            styles.text_title,
          ]}
        >
          {title} :
        </Text>
      )}
      {isDropDown ? (
        <TouchableOpacity
          onPress={openDropDown}
          style={[styles.formInputStyle, style]}
        >
          <Text
            style={{
              color: !value ? Colors.lightgrey : Colors.black,
              paddingStart: -SWidth(2.5),
            }}
          >
            {value || "Select " + title}
          </Text>
          <Icon name={"chevron-down"} size={iconSize} />
        </TouchableOpacity>
      ) : isDateSelector ? (
        <TouchableOpacity
          onPress={openDateSelector}
          style={[styles.formInputStyle, style]}
        >
          <Text
            style={{
              color: value == "" ? Colors.lightgrey : Colors.black,
              paddingStart: -SWidth(2.5),
            }}
          >
            {value || "Select " + title}
          </Text>
          <Icon name={"calendar-month"} size={25} color={Colors.listHeader} />
        </TouchableOpacity>
      ) : (
        <TextInput
          editable={editableProp}
          value={value}
          onChangeText={(text) => onChangeText(id, text)}
          maxLength={maxLengthProp || undefined}
          keyboardType={keyboardTypeProp || "default"}
          placeholderTextColor={Colors.lightgrey}
          placeholder={"Enter " + title}
          style={{
            height: SWidth(12),
            paddingHorizontal: SWidth(2.5),
            backgroundColor: Colors.white,
            borderColor: Colors.listHeader,
            elevation: 5,
            borderWidth: StyleSheet.hairlineWidth,
            zIndex: 5,
            borderRadius: SWidth(1),
            flex: 1,
            color: Colors.black,
          }}
        />
      )}
    </View>
  );
};

export default FormInputView;
