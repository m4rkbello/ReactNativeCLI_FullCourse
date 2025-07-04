import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GridComponent = () => {

    const ohahay = [
        {
            id: 1,
            name: "mark",
        },
        {
            id: 2,
            name: "test",
        },
        {
            id: 3,
            name: "ohahay",
        },
        {
            id: 4,
            name: "ayawkol",
        },
        {
            id: 5,
            name: "hehe",
        },
        {
            id: 6,
            name: "hehe",
        },
        {
            id: 7,
            name: "hehe",
        },
        {
            id: 8,
            name: "hehe",
        },
        {
            id: 9,
            name: "hehe",
        },
        {
            id: 10,
            name: "hehe",
        },
        {
            id: 11,
            name: "hehe",
        },
        {
            id: 12,
            name: "mark",
        },
        {
            id: 13,
            name: "test",
        },
        {
            id: 14,
            name: "ohahay",
        },
        {
            id: 15,
            name: "ayawkol",
        },
    ];

    return (
        <View>
            <Text style={{ fontSize: 31 }}>GridComponent</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>

                {
                    ohahay.map((ohahay) => {
                        nag
                        return (
                            <Text style={styles.item}>
                                {ohahay.name}
                            </Text>
                        )
                    })
                }

            </View>
        </View>
    )
}

export default GridComponent

const styles = StyleSheet.create({
    item: {
        fontSize: 30,
        backgroundColor: '#f9c2ff',
        margin: 5,
        padding: 5,
        height: 120,
        width: 120,
        textAlign: 'center',
    }
})