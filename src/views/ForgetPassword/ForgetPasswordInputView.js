import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ButtonView from '../../components/ButtonView';
import TextInputView from '../../components/TextInputView';
import { styles } from '../../constants/styles';
import { SHeight } from '../../constants/Utls';
import { Validate } from '../../constants/Validations';

const ForgetPasswordInputView = (props) => {
    const [phone, setPhone] = useState("")

    const onSubmit = () => {
        if (!Validate.checkNumber("Mobile Number", 10, phone)) {
            return false
        }
        else {
            props.onClick(phone)
        }
    }


    return (
        <View style={styles.LoginInputView}>
            <TextInputView
                icon={'phone'}
                title={"Mobile Number"}
                maxLengthProp={10}
                valueProp={phone}
                keyboardTypeProp={"number-pad"}
                onChangeTextProp={(phone) => setPhone(phone.replace(/[^0-9]/g, ''))}
            />
            <View style={{ marginVertical: SHeight(2) }}>
                <ButtonView onPressProp={() => onSubmit()} title={"SUBMIT"} />
            </View>
        </View>
    )
};

export default ForgetPasswordInputView;
