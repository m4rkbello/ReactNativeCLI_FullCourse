import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const UseStateComponent = () => {

    const [data, setData] = useState("KAPOYA!");

    const changeData = () => {
        setData("PERO OKAY RA CUTE MAN KO!");
    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>{data}</Text>
            <Button title="UPDATE STATE" onPress={changeData} />
        </View>
    )
}

export default UseStateComponent;