import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../constants/styles';
import LinearGradient from 'react-native-linear-gradient';

const ButtonView = (props) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#425c43', '#569958']} style={[styles.AppButtonStyle, { elevation: props.elevation ? props.elevation : 0 }]}>
            <TouchableOpacity onPress={props.onPressProp}
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text style={styles.AppButtonTextStyle}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </LinearGradient>


    )
};

export default ButtonView;
