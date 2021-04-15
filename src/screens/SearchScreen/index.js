import React from 'react'
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';
import SuggestionRow from './SuggestionRow';

const SearchScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Input Components */}
            <View style={{height: 500}}>
                <GooglePlacesAutocomplete
                    placeholder='Votre position'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                        navigation.navigate('Guests');
                    }}
                    fetchDetails
                    styles={{
                        textInput: styles.textInput
                    }}
                    query={{
                        key: 'AIzaSyDguFqu_sl5qbBxhci9X_lEzqt5dlumocM',
                        language: 'fr',
                        types: '(cities)'
                    }}
                    suppressDefaultStyles
                    renderRow={(item) => <SuggestionRow item={item} />}
                />
            </View>
        </View>
    )
}

export default SearchScreen;
