import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { images } from '../constants/images';
import LoginView from '../views/Login/LoginView';

export default Login = () => {
    const navigate = useNavigation()

    const onRegister = () => {
        navigate.navigate("Register")
    }

    const forgotPasswordClick = () => {
        navigate.navigate("ForgetPassword")
    }

    const onLogin = () => {
        navigate.replace("HomeNav")
    }

    return (
        <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
            <LoginView
                onLoginClick={() => onLogin()}
                onRegisterClick={() => onRegister()}
                forgotPassword={() => forgotPasswordClick()}
            />
        </ImageBackground>
    );
}

