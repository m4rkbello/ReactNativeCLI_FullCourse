import React from "react";
import { View, StyleSheet, Text, Button } from 'react-native';
import ExternalStylesComponent from "./ExternalStylesComponent";


const StyleComponent = () => {
    return (
        <View style={styles.component}>
            <Text style={{ backgroundColor: 'red' }}>INLINE STYTLE CSS</Text>
            <Text style={styles.internalBoxText1}>INTERNAL STYTLE CSS 1</Text>
            <Text style={styles.internalBoxText2}>INTERNAL STYTLE CSS 2</Text>
            <Text style={ExternalStylesComponent.internalBoxText3}>EXTERNAL STYTLE CSS 3</Text>
            <Text style={[styles.internalBoxText1, ExternalStylesComponent.internalBoxText3, { marginTop: 50 }]}>COMBINE STYTLE CSS 3</Text>
        </View>
    );
};

//INTERNAL CSS
const styles = StyleSheet.create({
    component: {
        marginTop: 1,
    },
    internalBoxText1: {
        fontSize: 20,
        color: 'red',
        backgroundColor: 'black',
        height: 100,
        margin: 5,
        textAlignVertical: 'center',
        borderWidth: 3,
        borderRadius: 20,
        borderColor: 'red'
    },
    internalBoxText2: {
        fontSize: 20,
        color: 'red',
        backgroundColor: 'black',
        height: 100,
        margin: 5,
        textAlignVertical: 'left',
        borderWidth: 3,
        borderRadius: 20,
        borderColor: 'green'
    }
})

export default StyleComponent;
