import React from 'react';
import {Text, View} from 'react-native';
import { styles } from '../../constants/styles';

const HomeView = (props) => {
  return (
    <View style={styles.container_Align_Center_All}>
        <Text>Welcome to Dashboard</Text>
    </View>
  );
};

export default HomeView;
