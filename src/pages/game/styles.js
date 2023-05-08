import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    gameContainer: {
        paddingVertical: 20,
    },
    content:{
        height:200,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    title:{
        fontSize: 17,
        fontFamily: 'italic',
    },
    buttonContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})