import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ClassChildComponent from './ClassChildComponent';

class ClassComponent extends Component {

    constructor() {
        super();
        this.state = {
            name: 'OUHAHAY',
            age: 25
        }
    }

    updateName(val) {
        this.setState({ name: val })
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 20 }}>
                    {this.state.name}
                </Text>
                <TextInput placeholder='Enter your name' onChangeText={(text) => this.updateName(text)} />
                <Button title="Press Me" />
                <ClassChildComponent name={this.state.name} />
            </View>
        );
    }
}

export default ClassComponent;
