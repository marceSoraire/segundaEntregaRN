import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create ({
    container: {
        width: 60,
        height: 60,
        justifyContent: 'space-around',
        alignItems: "center",
        backgroundColor: theme.colors.grey,
        borderWith: 2,
        borderRadius: 5,
        marginVertical: 10,
    },
    numer: {
        fontSize: 25,
        fontFamily: 'bold',
    },
})