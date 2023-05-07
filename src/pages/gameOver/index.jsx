import { View, Text } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components';

const GameOver =()=> {
    return (
        <View style={styles.overContainer}>
            <Header title='Fin del juego'/>
            <Text>GameOver</Text>
        </View>
    )
}

export default GameOver;