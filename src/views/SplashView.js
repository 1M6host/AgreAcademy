import React from 'react';
import { Text, View } from 'react-native';
import TextView from '../components/TextView';
import ButtonView from '../components/ButtonView';
import ImageView from '../components/ImageView';
import { styles } from '../constants/styles';
import { SHeight } from '../constants/Utls';
import { images } from '../constants/images';

const SplashView = (props) => {
    return (
        <View style={styles.container_Align_Center_All}>
            <ImageView
                url={images.logo}
                style={[styles.AppLogoStyle, {}]}
            />
            <ImageView
                url={images.logo_mid}
                style={[styles.AppLogoStyle, { height: SHeight(30), marginVertical: SHeight(2) }]}
            />
            <View style={{ marginTop: SHeight(2) }}>
                <ButtonView
                    elevation={10}
                    title={"START"}
                    onPressProp={props.onStart}
                />
            </View>
        </View>
    )
};

export default SplashView;
