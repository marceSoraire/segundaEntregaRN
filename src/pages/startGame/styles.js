import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
    startContainer: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    title:{
        fontSize: 20,
        color: theme.colors.text,
        textAlign: 'center',
        paddingVertical: 20,
    },
    input: {
        width: '20%',
        borderBottomColor: theme.colors.danger,
        borderBottomWidth: 1,
        textAlign: 'center',
        fontSize: 20,
        color: theme.colors.text,
    },
    inputContainer: {
        justifyContent:'center',
        alignItems: 'center',
        marginHorizontal: 20,
        minWidth: 80,
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 10,
    },
    label: {
        fontSize: 16,
        color: theme.colors.text,
        paddingVertical: 5,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    confirmedContainer: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        marginHorizontal: 20,
    },
    confirmedTitle: {
        fontSize: 16,
    },
})