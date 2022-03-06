import React, { useEffect, useState } from 'react';
import { Keyboard, Text, TextInput, View } from 'react-native';
import { styles } from '../constants/styles';
import { SWidth } from '../constants/Utls';
import TextView from './TextView';

const OTPInputTextView = (props) => {
    const [otp, setOTP] = useState([])

    var otpTextInput = [];

    useEffect(() => {
        console.log("Child: ", otp);
    }, [otp])

    const renderInputs = () => {
        const inputs = Array(6).fill(0);
        const reg = new RegExp('^[0-9]+$')
        const txt = inputs.map(
            (i, j) =>
                <TextInput
                    style={[styles.inputRadius]}
                    keyboardType="number-pad"
                    secureTextEntry
                    maxLength={1}
                    onChangeText={v => focusNext(j, v.replace(/[^0-9]/g, ''))}
                    onKeyPress={e => focusPrevious(e.nativeEvent.key, j)}
                    ref={ref => otpTextInput[j] = ref}
                />
        );
        return txt;
    }

    const focusPrevious = (key, index) => {
        if (index !== 0)
            if (key === 'Backspace') {

                otpTextInput[index - 1].focus();
                otpTextInput[index - 1].clear();
            }
            else if (key !== 'Backspace' && index < otpTextInput.length - 1) {
                otpTextInput[index + 1].focus();
            }

    }

    const focusNext = async (index, value) => {
        const tempotp = otp;

        if (index < otpTextInput.length - 1 && value) {
            otpTextInput[index + 1].focus();
        }
        if (index === otpTextInput.length - 1) {
            otpTextInput[index].blur();
        }

        tempotp[index] = value.replace(/[^0-9]/gmi, '');

        setOTP(() => {
            return tempotp
        });
        // if (tempotp.length > 5) {
            console.log("true");
            props.getOtp(tempotp.join(''))
        // }
    }

    return (
        <View style={props.style || {}}>
            {props.title && <TextView title={"Enter " + props.title} style={{ padding: SWidth(2) }} />}
            <View style={styles.OTPInputTextView_Container_Style}>
                {renderInputs()}
            </View>
        </View>

    )
};

export default OTPInputTextView;
