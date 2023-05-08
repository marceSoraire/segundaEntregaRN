import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
    albumContainer:{
        marginVertical: 5,
    },
    cds:{
        fontFamily: 'bold',
        textAlign: 'center',
        color: theme.colors.text,
    },
    album: {
        textAlign: 'center',
        fontFamily: 'italic',
        color: theme.colors.text,
    },
    img: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 230,
        height: 200,
    },
    btn: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
}) 
