import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonView from '../../components/ButtonView';
import OTPInputTextView from '../../components/OTPInputTextView';
import { styles } from '../../constants/styles';
import { SHeight } from '../../constants/Utls';

const OTPInputView = (props) => {
    const [otp, setOtp] = useState("")
    
    return (
        <View style={styles.LoginInputView}>
            <OTPInputTextView styles={styles.OTPInputTextView_Style} getOtp={(otp) => setOtp(otp)} title={props.buttonText} />
            <View style={{ marginVertical: SHeight(2) }}>
                <ButtonView onPressProp={() => props.onClick(otp)} title={props.buttonText} />
            </View>
        </View>
    )
};

export default OTPInputView;
