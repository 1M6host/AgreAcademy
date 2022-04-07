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
}) => {
  return (
    <View style={styles.FormInputContainer}>
      <Text style={{ flex: 0.6 }}>{title} :</Text>
      {isDropDown ? (
        <TouchableOpacity
          onPress={openDropDown}
          style={{
            height: 50,
            backgroundColor: Colors.white,
            elevation: 5,
            zIndex: 5,
            borderRadius: SWidth(1),
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: 5,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>{value || title}</Text>
          <Icon name={"chevron-down"} size={iconSize} />
        </TouchableOpacity>
      ) : isDateSelector ? (
        <TouchableOpacity
          onPress={openDateSelector}
          style={{
            height: 50,
            backgroundColor: Colors.white,
            elevation: 5,
            zIndex: 5,
            borderRadius: SWidth(1),
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: 5,
            alignItems: "center",
            justifyContent: "space-between",
          }}
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
          style={{
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
