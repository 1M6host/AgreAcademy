import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../constants/styles';
import { SHeight } from '../constants/Utls';
import ImageView from './ImageView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../constants/Colors';

const FooterView = (props) => (
    <View style={styles.footerContainerStyle}>
        <Icon
            name="share-variant-outline"
            color={Colors.black}
            size={SHeight(3)}
        />
        <Icon
            name="share-variant-outline"
            color={Colors.black}
            size={SHeight(3)}
        />
    </View>
);

export default FooterView;
