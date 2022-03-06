import React from 'react';
import { Text, View } from 'react-native';
import ImageView from '../../components/ImageView';
import { images } from '../../constants/images';
import { styles } from '../../constants/styles';
import { SHeight } from '../../constants/Utls';
import OTPInputView from './OTPInputView';

const OTPView = (props) => (
    <View style={[styles.container_Align_Center_Justify_Space_Evenly, { paddingVertical: SHeight(7) }]}>
        <ImageView
            url={images.logo}
            style={[styles.AppLogoStyle, { height: SHeight(25) }]}
        />
        <OTPInputView onClick={props.onVerifyClick} buttonText={props.screenName} />
    </View>
);

export default OTPView;
