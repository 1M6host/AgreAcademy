import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonView from '../../components/ButtonView';
import TextInputView from '../../components/TextInputView';
import TextView from '../../components/TextView';
import { styles } from '../../constants/styles';
import { SHeight } from '../../constants/Utls';
import { Validate } from '../../constants/Validations';

const LoginInputView = (props) => {
    const [phone, setPhone] = useState("")
    const [pin, setPin] = useState("")

    const onSubmit = () => {
        if (!Validate.checkNumber("Mobile Number", 10, phone)) {
            return false
        }
        else if (!Validate.checkNumber("Pin", 6, pin)) {
            return false
        }
        else {
            props.onClick(`MobileNumber=${phone}&PIN=${pin}`)
        }
    }

    return (
        <View style={styles.LoginInputView}>
            <TextInputView
                icon={'phone'}
                title={"Mobile Number"}
                maxLengthProp={10}
                valueProp={phone}
                keyboardTypeProp={"number-pad"}
                onChangeTextProp={(phone) => setPhone(phone.replace(/[^0-9]/g, ''))}
            />
            <TextInputView
                password
                icon={'form-textbox-password'}
                title={"PIN"}
                maxLengthProp={6}
                valueProp={pin}
                keyboardTypeProp={"number-pad"}
                onChangeTextProp={(pin) => setPin(pin.replace(/[^0-9]/g, ''))}
            />
            <ButtonView onPressProp={() => onSubmit()} title={props.buttonText} />
            <TouchableOpacity onPress={() => { props.forgotPassword() }} style={{ marginTop: SHeight(2) }}>
                <TextView style={{ alignSelf: 'center', }} title={"Forgot your password?"} />
            </TouchableOpacity>
        </View>
    )
};

export default LoginInputView;
