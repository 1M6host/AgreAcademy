import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import ButtonView from '../../components/ButtonView';
import ImageView from '../../components/ImageView';
import TextView from '../../components/TextView';
import { images } from '../../constants/images';
import { services } from '../../constants/services/services';
import { styles } from '../../constants/styles';
import { SHeight, SWidth } from '../../constants/Utls';
import ResetPasswordInputView from './ResetPasswordInputView';
import ResetPasswordOTPView from './ResetPasswordOTPView';

const ResetPasswordView = (props) => {
    const route = useRoute()

    useEffect(() => {
        console.log(route.params.mobile)
    })

    const onSubmit = (pin) => {
        services.resetPassword(`MobileNumber=${route.params.mobile}` + pin).then((res) => {
            if (res.code == "200") {
                console.log(res);
                props.onResetPasswordClick()
            } else {
                alert(res.message)
            }
        })
    }

    return (
        <View style={styles.container_Align_Center_Justify_Space_Evenly}>
            <ImageView
                url={images.logo}
                style={[styles.AppLogoStyle, { height: SHeight(25) }]}
            />
            <TextView
                style={[styles.text_H2_normal, { width: SWidth(80) }]}
                title={"Please reset your password."}
            />
            <ResetPasswordOTPView onClick={(pin) => { onSubmit(pin) }} />

        </View>
    )
};

export default ResetPasswordView;
