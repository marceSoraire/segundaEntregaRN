import { useState } from 'react';
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { styles } from './styles';
import { Card, NumerContainer } from '../../components/index';
import { theme } from '../../constants';

const StartGame =({ onStart })=> {

    const [ number, setNumber ] = useState('');
    const [ selected, setSelected ] = useState(null);
    const [ confirmed, setConfirmed ] = useState(false);

    const onHandlerChangeText =(text)=>{
        setNumber(text.replace(/[aA-zZ]/g, ''));
    }

    const hanldeConfirmed =()=> {
        const choseNumbre = Number(number);
        if (isNaN(choseNumbre) || choseNumbre <= 0 || choseNumbre > 99) {
            Alert.alert('Numero invalido', 'el numero esperado debe ser entre 1 y 99', [
                {text: 'Okay', style: 'destructive', onPress: ()=> setNumber('')},
            ])
        } else {
            setConfirmed(true);
            setSelected(choseNumbre);
            setNumber('');
        }
    }

    const hanldeReset =()=> {
        setNumber('');
        setSelected(null);
        setConfirmed(false)
    }

    const handleStart =()=> onStart(selected)

    const Confirmed = () => confirmed ? (
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>Numero seleccionado</Text>
            <NumerContainer number={selected}/>
            <Button title='Start Game' onPress={handleStart} color={theme.colors.grey}/>
        </Card>
    ) : null;

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.startContainer}>
                <Text style={styles.title}>Start Game</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.label}>Elije un numero</Text>
                    <TextInput 
                        placeholder='0'
                        style={styles.input}
                        keyboardType='number-pad'
                        maxLength={2}
                        autoCapitalize='none'
                        autoCorrect={false}
                        blurOnSubmit 
                        onChangeText={onHandlerChangeText}
                        value={number}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title='Reset'
                            onPress={hanldeReset}
                            color={theme.colors.danger}
                        />
                        <Button
                            title='Confrimar'
                            onPress={hanldeConfirmed}
                            color={theme.colors.secondary}
                        />
                    </View>
                </Card>
                <Confirmed/>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;