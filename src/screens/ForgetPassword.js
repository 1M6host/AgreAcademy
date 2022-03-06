import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { images } from '../constants/images';
import { SHeight, SWidth } from '../constants/Utls';
import ForgetPasswordView from '../views/ForgetPassword/ForgetPasswordView';

export default ForgetPassword = () => {
    const navigate = useNavigation()

    const onBackPress = () => {
        navigate.goBack()
    }

    const onForgetPassword = (mobile) => {
        navigate.replace("ResetPassword", { "mobile": mobile })
    }

    return (
        <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => onBackPress()} style={{ position: 'absolute', top: SHeight(5), left: SWidth(5) }}>
                <Icon name='keyboard-backspace' size={SWidth(8)} />
            </TouchableOpacity>
            <ForgetPasswordView onForgetPasswordClick={(mobile) => onForgetPassword(mobile)} />
        </ImageBackground>
    );
}

