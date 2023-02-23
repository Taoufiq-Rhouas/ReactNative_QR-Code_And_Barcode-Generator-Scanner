import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from '@rneui/themed';
import styles from './../styles/Style'

function Bar_Code({ navigation }) {
    return (
    <View style={styles.container}>
        <Text style={{textAlign: 'center'}} >Screen Bar Code</Text>
    </View>
    );
}

export default Bar_Code