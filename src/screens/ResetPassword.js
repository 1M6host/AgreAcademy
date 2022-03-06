import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { images } from '../constants/images';
import { SHeight, SWidth } from '../constants/Utls';
import ResetPasswordView from '../views/ResetPassword/ResetPasswordView';

export default ResetPassword = () => {
    const navigate = useNavigation()

    const onBackPress = () => {
        navigate.goBack()
    }

    const onResetPassword = () => {
        navigate.replace("Login")
    }

    return (
        <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => onBackPress()} style={{ position: 'absolute', top: SHeight(5), left: SWidth(5) }}>
                <Icon name='keyboard-backspace' size={SWidth(8)} />
            </TouchableOpacity>
            <ResetPasswordView onResetPasswordClick={() => onResetPassword()} />
        </ImageBackground>
    );
}

