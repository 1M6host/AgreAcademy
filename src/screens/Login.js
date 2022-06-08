import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { images } from '../constants/images';
import { setData } from '../constants/Utls';
import LoginView from '../views/Login/LoginView';

export default Login = () => {
    const navigate = useNavigation()

    const onRegister = () => {
        navigate.navigate("Register")
    }

    const forgotPasswordClick = () => {
        navigate.navigate("ForgetPassword")
    }

    const onLogin = async(UserObj) => {
        await setData("UserObj",UserObj)
        navigate.replace("HomeNav")
    }

    return (
        <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
            <LoginView
                onLoginClick={(UserObj) => onLogin(UserObj)}
                onRegisterClick={() => onRegister()}
                forgotPassword={() => forgotPasswordClick()}
            />
        </ImageBackground>
    );
}

