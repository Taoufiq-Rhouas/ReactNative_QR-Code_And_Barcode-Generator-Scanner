import * as React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';
import styles from './../styles/Style'

function Home({ navigation }) {
    return (
    <View style={styles.container}>
        <Button
            title="QR Code"
            onPress={() => navigation.navigate('QR Code')}
            // // icon={{ ...styles.iconButtonHome, name: 'qr-code' }}
            // icon={{ ...styles.iconButtonHome, name: 'qr-code' }}
            iconContainerStyle={styles.iconButtonHomeContainer}
            titleStyle={styles.titleButtonHome}
            // buttonStyle={styles.buttonHome}
            buttonStyle={styles.buttonHome2}
            containerStyle={styles.buttonHomeContainer}
        />
        <Button
            title="Bar Code"
            onPress={() => navigation.navigate('Bar Code')}
            // // icon={{ ...styles.iconButtonHome, name: 'bar-code' }}
            // icon={{ ...styles.iconButtonHome, name: 'bar-code' }}
            iconContainerStyle={styles.iconButtonHomeContainer}
            titleStyle={styles.titleButtonHome}
            // buttonStyle={styles.buttonHome}
            buttonStyle={styles.buttonHome2}
            containerStyle={styles.buttonHomeContainer}
        />
    </View>
    );
}

export default Home