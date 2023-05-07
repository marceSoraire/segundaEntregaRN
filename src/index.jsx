import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";
import { Game, StartGame } from "./pages";
import { Header } from "./components";
import { useState } from "react";
import { theme } from "./constants";
import { useFonts } from 'expo-font';

export default function App () {
    
    const [ userNumber, setUserNumber ] = useState(null);
    const [loaded] = useFonts({
        'black': require('../assets/fonts/Poppins-Black.ttf'),
        'bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'italic': require('../assets/fonts/Poppins-Italic.ttf'),
        'light': require('../assets/fonts/Poppins-Light.ttf'),
        'medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'semiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'thin': require('../assets/fonts/Poppins-Thin.ttf'),
    })

    if (!loaded) {
        return(
            <View style={styles.font}>
                <ActivityIndicator size='large' color={theme.colors.primary}/>
            </View>
        )
    }

    const onStart =(number) => setUserNumber(number);
    const Content =()=> ( userNumber ? <Game userNumber={userNumber}/> : <StartGame onStart={onStart}/> )
    const headerTitle = userNumber ? 'Adivina el Numero' : 'Bienvenidos';

    return(
        <View style={styles.container}>
            <Header title={headerTitle}/>
            <Content/>
        </View>
    )
}