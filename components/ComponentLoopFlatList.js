import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

const ComponentLoopFlatList = () => {

    const patotoya = [
        {
            id: 1,
            name: "mark",
            email: "patotoya@gmail.comm"
        },
        {
            id: 2,
            name: "test",
            email: "patotoya2@gmail.comm"
        },
        {
            id: 3,
            name: "ohahay",
            email: "patotoya3@gmail.comm"
        },
        {
            id: 4,
            name: "ayawkol",
            email: "patotoya4@gmail.comm"
        },
        {
            id: 5,
            name: "hehe",
            email: "patotoya5@gmail.comm"
        },
        {
            id: 6,
            name: "hehe",
            email: "patotoya6@gmail.comm"
        },
        {
            id: 7,
            name: "hehe",
            email: "patotoya7@gmail.comm"
        },
        {
            id: 8,
            name: "hehe",
            email: "patotoya8@gmail.comm"
        },
        {
            id: 9,
            name: "hehe",
            email: "patotoya9@gmail.comm"
        },
        {
            id: 10,
            name: "hehe",
            email: "patotoya10@gmail.comm"
        },
        {
            id: 11,
            name: "hehe",
            email: "patotoya11@gmail.comm"
        },
        {
            id: 12,
            name: "mark",
            email: "patotoya12@gmail.comm"
        },
        {
            id: 13,
            name: "test",
            email: "patotoya13@gmail.comm"
        },
        {
            id: 14,
            name: "ohahay",
            email: "patotoya14@gmail.comm"
        },
        {
            id: 15,
            name: "ayawkol",
            email: "patotoya15@gmail.comm"
        },
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.ayawkol}>COMPONENT IN LOOP WITH FLATLIST</Text>
            <FlatList
                data={patotoya}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <UserDataDummy data={item} />}
            />
        </SafeAreaView>
    )
}

const UserDataDummy = (props) => {

    const item = props.data;

    return (
        <View style={styles.box}>

            <Text style={styles.item}>
                {item.name}
            </Text>
            <Text style={styles.item}>
                {item.email}
            </Text>
        </View>
    )
};

export default ComponentLoopFlatList

const styles = StyleSheet.create({
    ayawkol: {
        fontSize: 35,
    },
    box: {
        flexDirection: 'row',
        borderColor: 'red',
        borderWidth: 2,
        marginBottom: 10,
    },
    item: {
        fontSize: 25,
        color: 'orange',
        flex: 1,
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'red',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});