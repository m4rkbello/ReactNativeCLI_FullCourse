import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class ClassComponent extends Component {


    render() {
        return (
            <View>
                <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 20 }}>
                    CLASS COMPONENT
                </Text>
                <TextInput placeholder='Enter your name' />
                <Button title="Press Me" />
            </View>
        );
    }
}

export default ClassComponent;
