import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const UseEffectHookDidUpdateComponent = () => {

    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(100);

    return (
        <View>
            <Text style={{ fontSize: 40 }}>USE EFFECT AS COMPONENT Did UPDATE!</Text>
            <Text style={{ fontSize: 30 }}>COUNT: {counter}</Text>
            <Text style={{ fontSize: 30 }}>DATA: {data}</Text>

            <Button title='UPDATE COUNT' onPress={() => setCounter(counter + 1)} />
            <Button title='UPDATE DATA' onPress={() => setData(counter + 1)} />
            <Ohahay item={{ counter, data }} />
        </View>
    )
}


const Ohahay = (props) => {

    useEffect(() => {
        console.warn("DISPLAY WHEN IT'S TRIGGERED!");
    }, [props.item.data])

    useEffect(() => {
        console.warn("DISPLAY WHEN IT'S TRIGGERED!");
    }, [props.item.counter])




    return (
        <View>
            <Text>
                <Text style={{ fontSize: 30 }}> PROPS DRILLING COUNT: {props.item.counter}</Text>
                <Text style={{ fontSize: 30 }}>PROPS DRILLING DATA: {props.item.data}</Text>
            </Text>
        </View>
    )
}

export default UseEffectHookDidUpdateComponent

const styles = StyleSheet.create({})