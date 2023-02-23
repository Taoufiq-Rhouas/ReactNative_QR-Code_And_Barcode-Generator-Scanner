import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from '@rneui/themed';
import styles from './../styles/Style'

function QR_Code({ navigation }) {
    return (
    <View style={styles.container}>
        <Text style={{textAlign: 'center'}} >Screen QR Code</Text>
    </View>
    );
}

export default QR_Code