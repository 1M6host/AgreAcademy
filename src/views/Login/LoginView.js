import React from 'react';
import { Text, View } from 'react-native';
import ImageView from '../../components/ImageView';
import { images } from '../../constants/images';
import { services } from '../../constants/services/services';
import { styles } from '../../constants/styles';
import { SHeight } from '../../constants/Utls';
import LoginFooter from './LoginFooter';
import LoginInputView from './LoginInputView';

const LoginView = (props) => {
    const onLogin = (body) => {
        services.login(body).then(res => {
            if (res.code == "200") {
                props.onLoginClick()
            }
            alert(res.message)
        })
    }

    return (
        <View style={[styles.container_Align_Center_Justify_Space_Evenly, { paddingVertical: SHeight(7) }]}>
            <ImageView
                url={images.logo}
                style={[styles.AppLogoStyle, { height: SHeight(25) }]}
            />
            <LoginInputView buttonText={"Login"} forgotPassword={props.forgotPassword} onClick={(body) => onLogin(body)} />
            <LoginFooter onClick={props.onRegisterClick} />
        </View>
    )
};

export default LoginView;
