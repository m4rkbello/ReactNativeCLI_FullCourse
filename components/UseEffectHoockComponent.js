import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const UseEffectHoockComponent = () => {

    //useState 
    const [count, setCount] = useState(0);

    //callback fn 
    useEffect(() => {
        console.warn('OHAHAY!');
    })


    return (
        <View>
            <Text style={{ fontSize: 40 }}>LIFE CYCLE WITH USE-EFFECT! {count} </Text>
            <Button title="ADD" onPress={() => setCount(count + 1)} />
        </View>
    )
}

export default UseEffectHoockComponent

const styles = StyleSheet.create({})