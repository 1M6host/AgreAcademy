import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ButtonView from '../../components/ButtonView';
import OTPInputTextView from '../../components/OTPInputTextView';
import TextInputView from '../../components/TextInputView';
import TextView from '../../components/TextView';
import { styles } from '../../constants/styles';
import { SHeight } from '../../constants/Utls';
import { Validate } from '../../constants/Validations';

const ResetPasswordInputView = (props) => {
    const [password, setPassword] = useState("")
    const [confirmPasword, setConfirmPassword] = useState("")

    const onSubmit = () => {
        console.log("confirm Pin");
        if (!Validate.checkOTP("PIN", password)) {
            return false
        }
        else if (!Validate.checkOTP("Confirm PIN", confirmPasword)) {
            return false
        }
        else if (!Validate.compareVal("PINs", password, confirmPasword)) {
            return false
        }
        else {
            console.log("confirm Pin validated");
            props.onClick(`&PIN=${password}`)
        }
    }

    return (
        <View style={{ marginVertical: SHeight(2) }}>
            <OTPInputTextView getOtp={(password) => setPassword(password)} title={"new PIN"} />
            <OTPInputTextView style={{ marginVertical: SHeight(2) }} getOtp={(confirmPasword) => setConfirmPassword(confirmPasword)} title={"new PIN to confirm"} />
            <ButtonView onPressProp={() => onSubmit()} title={"SUBMIT"} />
        </View>
    )
};

export default ResetPasswordInputView;
