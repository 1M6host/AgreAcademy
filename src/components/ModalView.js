import React from "react";
import { Text, View, Modal, FlatList, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";
import { styles } from "../constants/styles";
import { SHeight, SWidth } from "../constants/Utls";
import BlueButtonView from "./BlueButtonView";

const ModalView = (props) => {
  const renderItemComponent = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.onSelectValue(props.itemKey, item);
        }}
        style={{ flex: 1, paddingVertical: SHeight(1.5), alignItems: "center" }}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const itemSeparatorComponent = ({ item }) => {
    return <View style={{ height: 1, backgroundColor: Colors.lightgrey }} />;
  };
  return (
    <Modal transparent animationType="slide" visible={props.modalVisibility}>
      <View style={styles.modalContentContainer}>
        <View style={styles.modalContentInnerContainer}>
          <FlatList
            data={props.dropDownList || []}
            renderItem={renderItemComponent}
            ItemSeparatorComponent={itemSeparatorComponent}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;
