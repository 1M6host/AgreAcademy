import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { images } from '../constants/images';
import { services } from '../constants/services/services';
import { Validate } from '../constants/Validations';
import OTPView from '../views/OTP/OTPView';

export default OTP = () => {
    const navigate = useNavigation()
    const route = useRoute()

    useEffect(() => {
        console.log(route.params.mobile)
    })

    const onOTPVerify = (otp) => {

        if (!Validate.checkOTP("OTP", otp)) {
            return false
        } else {
            services.verifyOTP(`MobileNumber=${route.params.mobile}&OTP=${otp}`).then(res => {
                if (res.code == "200") {
                    navigate.replace("PIN", { "mobile": route.params.mobile })
                }
                alert(res?.message || res?.errors?.OTP)
            })
        }
    }

    return (
        <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
            <OTPView onVerifyClick={(otp) => onOTPVerify(otp)} screenName={"OTP"} />
        </ImageBackground>
    )
};

