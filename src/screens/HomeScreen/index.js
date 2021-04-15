import React from 'react'
import { View, Text, Input } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Header</Text>
            </View>
            <Animatable.View 
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig"
            >
                <Text style={styles.title}>Faites vous livrer vos medicaments!</Text>
                <Text style={styles.text}>Connectez-vous avec votre compte</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <LinearGradient
                            colors={['#02C39A', '#00A896']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Commencer</Text>
                            <MaterialIcons 
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default HomeScreen;
