import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectUnmountComponent = () => {

    const [show, setShow] = useState(false);

    return (
        <View>
            <Text style={{ fontSize: 40 }}>USE EFFECT FOR UNMOUNT COMPONENT</Text>
            <Button title="TOGGLE" onPress={() => setShow(!show)} />
            {
                show ? <Student /> : null
            }
        </View>
    )
}

const Student = () => {

    setInterval(() => {
        console.warn("TIMER")
    }, 2000)


    useEffect(() => {
        // console.warn("TEST");
        return () => { console.warn("DATA"); }
    })

    return (
        <View>
            <Text style={{ fontSize: 40 }}>STUDENT DATA!</Text>
        </View>
    )
}



export default UseEffectUnmountComponent

const styles = StyleSheet.create({})