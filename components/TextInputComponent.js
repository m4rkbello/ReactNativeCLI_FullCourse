import React, { useState } from "react";
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';

const TextInputComponent = () => {

    const [data, setData] = useState('');

    return (
        <View>
            <Text style={{ fontSize: 30 }}>
                HANDLE TEXT INPUT
            </Text>
            <Text >THE DATA IS:{data}</Text>
            <TextInput
                value={data}
                style={styles.textInputYow}
                onChangeText={(text) => setData(text)}
                placeholder="Enter your name e.i OHAHAY" />
            <Button title="Clear Text Input" onPress={() => setData('')} />
        </View>
    );
};

const styles = StyleSheet.create({
    textInputYow: {
        fontSize: 20,
        borderColor: 'red',
        borderWidth: 2,
        margin: 20,
    },
    textData: {
        fontSize: 20,
    }
})
export default TextInputComponent;