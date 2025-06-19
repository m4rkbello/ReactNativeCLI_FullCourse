import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const CustomListComponent = () => {

    const users = [
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
        {
            id: 16,
            name: "hehe",
        },
        {
            id: 17,
            name: "hehe",
        },
        {
            id: 18,
            name: "hehe",
        },
        {
            id: 19,
            name: "hehe",
        },
        {
            id: 20,
            name: "hehe",
        },
        {
            id: 21,
            name: "hehe",
        },
        {
            id: 22,
            name: "hehe",
        },
    ]

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Custom List  with Map Function!</Text>
            <ScrollView>
                {
                    users.map((item) =>
                        <Text style={styles.item}>
                            {item.name}
                        </Text>)
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        fontSize: 24,
        padding: 10,
        backgroundColor: 'blue',
        color: '#fff',
        margin: 10,
    }
})

export default CustomListComponent;