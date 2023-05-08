import { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { styles } from './styles';
import { Card, NumerContainer } from '../../components/index';
import { theme } from '../../constants';
import Posters from '../../components/posters';

const StartGame =({ onStart })=> {

    const [ number, setNumber ] = useState('');
    const [ confirmed, setConfirmed ] = useState(false);

    const hanldeConfirmed =()=> setConfirmed(!confirmed);
    const hanldeAdd =(countTotal)=> setNumber(countTotal);
    const handleStart =()=> onStart(number)

    const hanldeCancel =()=> {
        setNumber('');
        setConfirmed(false)
    }

    const Confirmed = () => confirmed ? (
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>Desea comprar los seguientes Cds?</Text>
            <NumerContainer number={number}/>
            <View style={styles.btnConfirm}>
                <Button title='Cancelar' onPress={hanldeCancel} color={theme.colors.danger}/>
                <Button title='Confirmar' onPress={handleStart} color={theme.colors.primary}/>
            </View>
        </Card>
    ) : null;

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.startContainer}>
                <Text style={styles.title}>Arte Infernal</Text>
                <View style={styles.cdsContainer}>
                    <Posters hanldeAdd={hanldeAdd}/>
                </View>
                <Button
                    title='Confrimar'
                    onPress={hanldeConfirmed}
                    color={theme.colors.secondary}
                />
                <Confirmed/>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;