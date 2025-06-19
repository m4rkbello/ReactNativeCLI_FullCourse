import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const DynamicGridComponent = () => {
    return (
        <View>
            <Text>STATIC DATA</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
                <Text style={styles.item}>KUPAL AMPT</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        fontSize: 25,
        backgroundColor: 'blue',
        color: '#fff',
        margin: 5,
        padding: 5,
        width: 120,
        height: 120,
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'

    }
})

export default DynamicGridComponent;