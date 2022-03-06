import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ButtonView from '../../components/ButtonView';
import OTPInputTextView from '../../components/OTPInputTextView';
import TextView from '../../components/TextView';
import { styles } from '../../constants/styles';
import { SHeight } from '../../constants/Utls';
import { Validate } from '../../constants/Validations';
import ResetPasswordInputView from './ResetPasswordInputView';

const ResetPasswordOTPView = (props) => {
    const [otp, setOtp] = useState("")
    const [timerId, setTimerId] = useState(null)
    const [timerMin, setTimerMin] = useState(1)
    const [timerSec, setTimerSec] = useState(59)
    const [timer, setTimer] = useState("")

    // useEffect(() => {
    //     if (!timerId) {
    //         setTimerId(
    //             setInterval(() => {
    //                 if (timerSec > 0) {
    //                     setTimerSec(timerSec - 1)
    //                 }
    //                 else if (timerMin > 0) {
    //                     setTimerMin(timerMin - 1)
    //                 }
    //                 return
    //             }, 1000)
    //         )
    //         return clearInterval(timerId)
    //     }
    // })

    useEffect(() => {
        setTimer(() => {
            return (String(("0" + timerMin) + ":" + (timerSec > 9 ? timerSec : "0" + timerSec)))
        })
    }, [timerSec, timerMin])

    const onSubmit = (pin) => {
        if (!Validate.checkOTP("OTP", otp)) {
            return false
        }
        else {
            props.onClick(pin)
        }
    }

    return (
        <View style={[styles.LoginInputView, { paddingVertical: SHeight(1) }]}>
            <OTPInputTextView style={{ marginBottom: SHeight(2.5) }} getOtp={(otp) => setOtp(otp)} title={"OTP"} />

            {/*<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TextView style={styles.text_title} title={"Didn't get the OTP? "} />
                <TextView style={styles.text_normal_bold_timer} title={timer} />
            </View>
            <View style={{ marginVertical: SHeight(2), alignItems: 'center' }}>

                <TextView style={[styles.text_H2,]} title={"Resend OTP"} />
            </View>*/}
            <ResetPasswordInputView onClick={(pin) => { onSubmit(pin) }} />

        </View>
    )
};

export default ResetPasswordOTPView;
