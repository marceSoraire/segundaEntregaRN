import { View, Text} from 'react-native';
import { styles } from './styles';
import { Card, NumerContainer } from '../../components';

const Game =({ userNumber })=> {

    return (
        <View style={styles.gameContainer}>
            <Card style={styles.content}>
                <Text style={styles.title}>Realizo una compra exitosa de:</Text>
                <NumerContainer number={userNumber}/>
                <Text style={styles.title}>Cd´s de La Renga en Arte Infernal!!!</Text>
            </Card>
        </View>
    )
}

export default Game;