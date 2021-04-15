import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#02C39A"
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    title: {
        color: '#02C39A',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 10
    },
    signIn: {
        height: 40,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    }
}) 

export default styles;