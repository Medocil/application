import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Picker,
    ScrollView
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import apiClient from '../../config/api';
import styles from './styles';

const RegisterScreen = ({navigation}) => {


    const [Name, setName] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [telephone, setTelephone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [date, setDate] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState("Client");
    const [checkLastName, setCheckLastname] = React.useState(false);
    const [checkFirstName, setCheckFirstName] = React.useState(false);
    const [checkEmail, setCheckEmail] = React.useState(false);
    const [checkDate, setCheckDate] = React.useState(false);
    const [secureTextEntry, setSecureTextEntry] =  React.useState(true);

    const registerRequest = async () => {
        console.log(Name, firstName, telephone, date, password, selectedValue)
        try {
            const { data } = await apiClient.post('register', {
                email, 
                password, 
                date_of_birth: date,
                phone_number: telephone,
                status: selectedValue,
                password_confirmation: password,
                firstname: firstName,
                lastname: Name
            })
            console.log(data.token);
            if(data.token !== undefined){
                navigation.navigate('SearchScreen')
            }
        } catch (error) {
           console.error(error) 
        }
    }

    return (
        // <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.header} scrollEnabled={true}>
                {/* <Text style={styles.text_header}>Inscription</Text> */}
                <Text style={[styles.text_footer, {
                    
                    // marginTop: 35,
                }]}>Nom</Text>
                <View style={[styles.action]}>
                    <FontAwesome 
                        name="user-o"
                        color="#028090"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Nom" 
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={Name}
                        onChangeText={(val) => setName(val)}
                    />
                    {checkLastName ? 
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
                <Text style={[styles.text_footer, {
                    
                    marginTop: 35,
                }]}>Prenom</Text>
                <View style={[styles.action]}>
                    <FontAwesome 
                        name="user-o"
                        color="#028090"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Prenom" 
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={firstName}
                        onChangeText={(val) => setFirstName(val)}
                    />
                    {checkFirstName ? 
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
                <Text style={[styles.text_footer, {
                    
                    marginTop: 35,
                }]}>Adresse E-mail</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="at"
                        color="#028090"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Adresse E-mail" 
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={email}
                        defaultValue={email}
                        onChangeText={(val) => {
                            setEmail(val)
                        }}
                    />
                    {checkEmail ? 
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
                <Text style={[styles.text_footer, {
                    
                    marginTop: 35,
                }]}>Mot de passe</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        color="#028090"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Mot de passe" 
                        secureTextEntry={secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(val) => {
                            setPassword(val)
                        }}
                    />
                    <TouchableOpacity 
                        onPress={() => setSecureTextEntry(!secureTextEntry)}
                    >
                        <Feather 
                            name={secureTextEntry === true ? "eye-off" :"eye"}
                            color="grey"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text_footer, {
                    
                    marginTop: 35,
                }]}>Numéro de telephone</Text>
                <View style={styles.action}>
                    <Feather 
                        name="phone"
                        color="#028090"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Numéro de telephone" 
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={telephone}
                        keyboardType={'phone-pad'}
                        defaultValue={telephone}
                        onChangeText={(val) => {
                            setTelephone(val)
                        }}
                    />
                    {checkEmail ? 
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
                <Text style={[styles.text_footer, {
                    
                    marginTop: 35,
                }]}>Date de naissance</Text>
                <View style={styles.action}>
                    <Feather 
                        name="calendar"
                        color="#028090"
                        size={20}
                    />
                    <DatePicker
                        style={{width: 200}}
                        date={date}
                        mode="date"
                        placeholder="Date de naissance"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirmer"
                        cancelBtnText="Annuler"
                        // customStyles={{
                        // dateIcon: {
                        //     position: 'absolute',
                        //     left: 0,
                        //     top: 4,
                        //     marginLeft: 0
                        // },
                        // dateInput: {
                        //     marginLeft: 36
                        // }
                        // // ... You can check the source to find the other keys.
                        // }}
                        onDateChange={(date) => {setDate(date)}}
                    />
                    {checkDate ? 
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
                <Text style={[styles.text_footer, {
                    marginTop: 35,
                }]}>Date de naissance</Text>
                <View style={styles.action}>
                    <Feather 
                        name="calendar"
                        color="#028090"
                        size={20}
                    />
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.textInput}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Client" value="client" />
                        <Picker.Item label="Pharmacie" value="pharmacie" />
                        <Picker.Item label="Livreur" value="courier" />
                    </Picker>
                    {checkDate ? 
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
                <TouchableOpacity style={styles.button} onPress={() => registerRequest()}>
                    <LinearGradient 
                        colors={['#02C39A', '#00A896']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Valider</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
       // </View>
    )
}

export default RegisterScreen
