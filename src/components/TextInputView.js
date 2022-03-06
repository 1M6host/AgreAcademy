import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { iconSize, styles } from '../constants/styles';
import { SHeight } from '../constants/Utls';

const TextInputView = (props) => {
    return (
        <View style={styles.TextInputContainer}>
            {props.icon && <Icon name={props.icon} size={iconSize} />}
            <TextInput
                secureTextEntry={props.password}
                style={styles.textInput}
                placeholder={props.title}
                value={props.valueProp}
                maxLength={props.maxLengthProp}
                keyboardType={props.keyboardTypeProp || "default"}
                onChangeText={props.onChangeTextProp}
            />
        </View>
    )
};

export default TextInputView;
