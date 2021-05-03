import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LoginScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Login Screen</Text>
            <Button title='go to home' onPress={() => {
                props.navigation.navigate('Home')
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoginScreen;
