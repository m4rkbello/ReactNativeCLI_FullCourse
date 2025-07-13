import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const ShowHideComponent = () => {

    const [show, setShow] = useState(false);

    return (
        <View>
            <Text style={{ fontSize: 40 }}>SHOW/HIDE COMPONENT!</Text>

            <Button title="TOGGLE COMPONENT" onPress={() => setShow(!show)} />
            {
                show ? <User /> : null
            }

        </View>
    )
}

const User = () => {
    return (
        <View>
            <Text style={{ fontSize: 40, color: "violet" }}>TEST</Text>
        </View>
    )
}

export default ShowHideComponent

const styles = StyleSheet.create({})