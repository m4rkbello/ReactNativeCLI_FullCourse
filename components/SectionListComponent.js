import React from "react";
import { Text, View, SectionList, StyleSheet } from 'react-native';

const SectionListComponent = () => {

    const patotoya = [
        {
            id: 1,
            data: 'padayon lang',
        },
        {
            id: 2,
            data: 'nakakita ang',
        },
        {
            id: 3,
            data: 'Ginoo sa ',
        },
        {
            id: 4,
            data: 'Imong mga',
        },
        {
            id: 5,
            data: 'Paghago boi!',
        }
    ];


    return (
        <View>
            <Text sty>SECTION LIST REACT NATIVE</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 35
    }
})

export default SectionListComponent;