import React from "react";
import { Button, View, Text } from "react-native";


const ButtonAndOnPressEvents = () => {

    const err = () => {
        console.error("BUGO ERROR!")
    }

    const bug = (data) => {
        console.error(data)
    }


    return (
        <View>
            <Text>Button with onPress Event!</Text>
            <Button title="CLICK HERE" onPress={err} style={{ fontSize: 20 }} color={'#000'} />


            <Button title="CLICK HERE" onPress={() => bug("PAKYO!")} style={{ fontSize: 20 }} color={'red'} />
        </View>
    )
}

export default ButtonAndOnPressEvents;