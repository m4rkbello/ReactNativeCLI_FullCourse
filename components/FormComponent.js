import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const FormComponent = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false);

    const handleResetForm = () => {
        setDisplay(false);
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>SIMPLE FORM IN REACT NATIVE</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter Username"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <View style={{ marginBottom: 10 }}>
                <Button onPress={() => setDisplay(true)} title="GET DATA" />

            </View>
            <Button onPress={handleResetForm} title="Clear Data" />

            {
                display ?
                    <View>
                        <Text style={{ fontSize: 20 }}> {name}</Text>
                        <Text style={{ fontSize: 20 }}> {email}</Text>
                        <Text style={{ fontSize: 20 }}> {password}</Text>
                    </View>
                    : null

            }
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        color: 'red',
        backgroundColor: 'transparent',
        height: 50,
        margin: 5,
        textAlignVertical: 'center',
        borderWidth: 3,
        borderRadius: 20,
        borderColor: 'red'
    },
})

export default FormComponent;