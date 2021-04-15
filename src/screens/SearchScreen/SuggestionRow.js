import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';

const SuggestionRow = ({item}) => {
    return (
        <View>
            <View style={styles.row} onPress={() => navigation.navigate('Guests')}>
                <View style={styles.iconContainer}>
                    <Feather name={'map-pin'} size={25} />
                </View>
                <Text style={styles.locationText}>{item.description}</Text>
            </View>
        </View>
    )
}

export default SuggestionRow;
