import React, { useState } from 'react';
import { DeviceEventEmitter, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonView from '../../components/ButtonView';
import TextInputView from '../../components/TextInputView';
import TextView from '../../components/TextView';
import { styles } from '../../constants/styles';
import { SHeight } from '../../constants/Utls';
import { Validate } from '../../constants/Validations';

const RegisterInputView = (props) => {
    const [check, setCheck] = useState(true)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    var regex = ""

    const onCheckClick = () => {
        setCheck(!check)
    }

    const onSubmit = () => {
        if (!Validate.checkText("Name", name)) {
            return false
        }
        else if (!Validate.checkNumber("Mobile Number", 10, phone)) {
            return false
        }
        else {
            DeviceEventEmitter.emit("loading")
            props.onClick({
                "registrationID": 0,
                "name": String(name).trim(),
                "mobileNumber": phone,
                "otp": 0,
                "pin": 0,
                "isParents": check,
                "isVerified": true,
                "isActive": true,
                "plateform": "mobile"
            })

        }
    }

    return (
        <View style={styles.LoginInputView}>
            <TextInputView
                icon={'account'}
                title={"Name"}
                valueProp={name}
                onChangeTextProp={(name) => setName(name.replace(/[^a-zA-Z\s]/gi, ''))}
            />
            <TextInputView
                icon={'phone'}
                title={"Mobile Number"}
                maxLengthProp={10}
                valueProp={phone}
                keyboardTypeProp={"number-pad"}
                onChangeTextProp={(phone) => setPhone(phone.replace(/[^0-9]/g, ''))}
            />
            <TextView
                button
                title={"You are parents?"}
                check={check}
                setCheck={onCheckClick}
            />
            <View style={{ marginVertical: SHeight(2) }}>
                <ButtonView
                    onPressProp={() => onSubmit()}
                    title={props.buttonText}
                />
            </View>
        </View>
    )
};

export default RegisterInputView;
