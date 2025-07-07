import React from "react";
import { Text, View, SectionList, StyleSheet } from 'react-native';

const SectionListComponent = () => {

    const patotoya = [
        {
            id: 1,
            name: 'padayon lang',
            data: ['php', 'JS', 'JAVA'],
        },
        {
            id: 2,
            name: 'pakyow',
            data: ['php', 'JS', 'JAVA'],
        },
        {
            id: 3,
            name: 'pakyow',
            data: ['php', 'JS', 'JAVA'],
        },
        {
            id: 4,
            name: 'pakyow',
            data: ['php', 'JS', 'JAVA'],
        },
        {
            id: 5,
            name: 'pakyow',
            data: ['php', 'JS', 'JAVA'],
        }
    ];


    return (
        <View>
            <Text style={styles.headerText}>SECTION LIST REACT NATIVE</Text>
            <SectionList
                sections={patotoya}
                renderItem={({ item }) => <Text style={{ marginLeft: 10, fontSize: 20 }}>{item}</Text>}
                renderSectionHeader={({ section: { name } }) => <Text style={{ color: 'red', fontSize: 25 }}>{name}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 35
    }
})

export default SectionListComponent;