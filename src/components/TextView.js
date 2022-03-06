import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { iconSize, styles } from '../constants/styles';

const TextView = (props) => {
    // return <Text style={props.style}>{props.title}</Text>
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            {props.button && <TouchableOpacity onPress={() => props.setCheck()} style={styles.CheckBoxContainerStyle}>
                <Icon name={props.check ? "checkbox-marked-outline" : "checkbox-blank-outline"} size={iconSize} />
            </TouchableOpacity>}
            <Text style={props.style}>{props.title}</Text>
        </View>
    )
};

export default TextView;
