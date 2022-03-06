import React from 'react';
import { Text, View } from 'react-native';
import ButtonView from '../../components/ButtonView';
import ImageView from '../../components/ImageView';
import TextView from '../../components/TextView';
import { images } from '../../constants/images';
import { services } from '../../constants/services/services';
import { styles } from '../../constants/styles';
import { SHeight, SWidth } from '../../constants/Utls';
import ForgetPasswordInputView from './ForgetPasswordInputView';

const ForgetPasswordView = (props) => {

    const onSubmit = (mobile) => {
        services.forgotPassword(`MobileNumber=${mobile}`).then((res) => {
            if (res.code == "200") {
                props.onForgetPasswordClick(mobile)
            }
            alert(res.message)
        })
    }

    return (
        <View style={styles.container_Align_Center_Justify_Space_Evenly}>
            <ImageView
                url={images.logo}
                style={[styles.AppLogoStyle, { height: SHeight(25) }]}
            />
            <TextView
                style={[styles.text_H2_normal, { width: SWidth(80),  }]}
                title={"Enter the phone number used for registration."}
            />
            <ForgetPasswordInputView onClick={(mobile) => { onSubmit(mobile) }} />
        </View>
    )
};

export default ForgetPasswordView;
