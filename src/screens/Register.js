import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { images } from '../constants/images';
import RegisterView from '../views/Register/RegisterView';

export default Register = () => {
    const navigate = useNavigation()

    const onRegister = (mobile) => {
        navigate.navigate("OTP", { "mobile": mobile })
    }

    return (
        <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
            <RegisterView onRegisterClick={(mobile) => onRegister(mobile)} />
        </ImageBackground>
    );
}

