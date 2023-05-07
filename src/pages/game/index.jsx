import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { Card, NumerContainer } from '../../components';
import { theme } from '../../constants';
import { useState } from 'react';

const minN = 1;
const maxN = 99;
const generateNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if ( randomNumber === exclude) {
        return generateNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
};

const Game =({ userNumber })=> {

    const [ currentGuess, setCurrentGuess] = useState(generateNumber(minN, maxN, userNumber));

    return (
        <View style={styles.gameContainer}>
            <Card style={styles.content}>
                <Text style={styles.title}>Juega!</Text>
                <NumerContainer number={currentGuess}/>
                <View style={styles.buttonContainer}>
                    <Button title='Lower' color={theme.colors.grey} onPress={()=>{}}></Button>
                    <Button title='Greater' color={theme.colors.grey} onPress={()=>{}}></Button>
                </View>
            </Card>
        </View>
    )
}

export default Game;