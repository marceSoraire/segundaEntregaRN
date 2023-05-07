import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 80,
        backgroundColor: theme.colors.primary,
        marginTop: 35,
        justifyContent: 'center',
    },
    headerTitle: {
        textAlign: 'center',  
        fontSize: 20,
        fontFamily: 'medium',
    },
})