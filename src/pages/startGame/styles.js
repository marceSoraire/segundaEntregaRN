import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
    startContainer: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    title:{
        fontFamily: 'bold',
        fontSize:20,
        color: theme.colors.text,
        textAlign: 'center',
        paddingVertical: 5,
    },
    cdsContainer: {
        justifyContent:'center',
        alignItems: 'center',
        marginHorizontal: 20,
        minWidth: 80,
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 10,
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
    btnConfirm: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})