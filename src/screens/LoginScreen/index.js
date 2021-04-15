  
import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    KeyboardAvoidingView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import apiClient from '../../config/api';
import { useTheme } from 'react-native-paper';

import styles from './styles';


const LoginScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    
    const { colors } = useTheme();
    const textInputChange = (val) => {
        if(val.length != 0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        }
        else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const loginRequest = async () => {
        let email = data.email;
        let password = data.password;
        try {
            const { data } = await apiClient.post('login', {
                email, 
                password
            })
            if (data.token.length > 0) {
                navigation.navigate('SearchScreen');
            }
        } catch (error) {
           console.error(error) 
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>BIenvenue !</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>E-mail</Text>
                <KeyboardAvoidingView behavior='padding'> 
                    <View style={styles.action}>
                        <FontAwesome 
                            name="user-o"
                            color="#028090"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Adresse E-mail" 
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) =>  textInputChange(val)}
                        />
                        {data.check_textInputChange ? 
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                            : null
                        }
                        
                    </View>
                </KeyboardAvoidingView>
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Mot de passe</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#028090"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Mot de passe" 
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity 
                        onPress={() => updateSecureTextEntry()}
                    >
                        <Feather 
                            name={data.secureTextEntry === true ? "eye-off" :"eye"}
                            color="grey"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => loginRequest()}>
                    <LinearGradient 
                        colors={['#02C39A', '#00A896']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Se Connecter</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RegisterScreen')}
                    style={[styles.signIn, {
                        borderColor: "#02C39A",
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: "#02C39A"
                    }]}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen;
