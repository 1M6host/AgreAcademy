import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { styles } from '../constants/styles';
import TextView from './TextView';

const Loader = () => (
    <View style={styles.container_loader_center_all}>
        <ActivityIndicator size={"large"} />
        <TextView title={"Loading ..."} style={styles.text_normal} />
    </View>
);

export default Loader;
