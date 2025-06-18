import React from "react";
import { View, Button, Text } from 'react-native';

const PropsParentComponent = () => {

    let name = "MARKBELLO";

    return (
        <View>
            <Text style={{ fontSize: 30 }}>PROPS PARENT/CHILD </Text>
            <PropsChildrenComponent name={name} />

        </View>
    );
};


const PropsChildrenComponent = (ohahay) => {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>PROPS TO CHILD! {ohahay.name} </Text>
        </View>
    )
}







export default PropsParentComponent;