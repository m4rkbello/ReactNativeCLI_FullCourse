import React, { useState } from "react";
import { View, Button, Text } from 'react-native';

const PropsParentComponent = () => {

    let name = "PROPS DRILLING PARENT TO CHILD!";
    const [alias, setAlias] = useState("MARK");

    return (
        <View>
            <Text style={{ fontSize: 30 }}>PROPS PARENT/CHILD </Text>
            <PropsChildrenComponent name={name} />
            <PropsChildrenComponent alias={alias} />
            <Button title="PROPS EVENTS!" onPress={() => setAlias("OHAHAY!")} />
        </View>
    );
};


const PropsChildrenComponent = (x) => {
    console.log(x);
    return (
        <View>
            <Text style={{ fontSize: 30 }}>PROPS TO CHILD COMPONENT! {x.name} </Text>
            <Text style={{ fontSize: 30 }}>PROPS TO CHILD COMPONENT! WITH EVENT ONPRESS {x.alias} </Text>

        </View>
    )
}







export default PropsParentComponent;