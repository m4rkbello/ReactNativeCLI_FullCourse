import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';


const FlatListComponent = () => {

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
        }
    ]

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Flat List Choi!</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
            />
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

export default FlatListComponent;