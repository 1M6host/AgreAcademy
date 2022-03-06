import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ButtonView from '../../components/ButtonView';
import TextView from '../../components/TextView';
import { styles } from '../../constants/styles';

const LoginFooter = (props) => (
    <View style={styles.OTPInputTextView_Container_Style}>
        <TextView title={"New User? "} style={styles.text_normal} />
        <TouchableOpacity onPress={() => props.onClick()} >
            <TextView title={"Register"} style={[styles.text_normal_bold, { textDecorationLine: "underline", color: "blue" }]} />
        </TouchableOpacity>
    </View>
);

export default LoginFooter;
