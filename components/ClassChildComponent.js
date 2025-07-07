import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class ClassChildComponent extends Component {
    render() {
        console.warn(this.props);
        return (
            <View>
                <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>{this.props.name}</Text>
            </View>
        )
    }
}

export default ClassChildComponent;