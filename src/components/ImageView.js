import React from 'react';
import { Image, Text, View } from 'react-native';

const ImageView = (props) => (
    <Image source={props.url} style={props.style} />
);

export default ImageView;
