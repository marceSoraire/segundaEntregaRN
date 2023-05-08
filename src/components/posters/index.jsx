import { useState} from "react";
import { styles } from './styles';
import { View,Text, Image, Button } from "react-native";
import { theme } from "../../constants";
import Card from "../card";

const Posters =({ hanldeAdd })=>{

    const [countTotal, setCountTotal ] = useState(0);
    const [cds, setCds ] = useState(false);

    const onHandleAdd =()=>{
        setCountTotal(countTotal + 1);
        setCds(true)
    } 
    const onHandleRest =() => {
        if (countTotal <= 0) {
            setCountTotal(0);
            setCds(false)
        } else {
            setCountTotal(countTotal - 1)
        }
    }
    hanldeAdd(countTotal);
    return(
        <View>
            {cds ? <Text style={styles.cds}>Cds Agregados: {countTotal}</Text> : null}
            <Card style={styles.albumContainer}>
                <Text style={styles.album}>Algun Rayo</Text>
                <Image
                    style={styles.img} 
                    source={{uri:'https://silenciowp.s3.amazonaws.com/wp-content/uploads/2018/09/larengaalgunrayo-400x400.jpg'}}
                />
                <View style={styles.btn}>
                    <Button
                        title='Rest'
                        onPress={onHandleRest}
                        color={theme.colors.danger}
                    />
                    <Button
                        title='Add'
                        onPress={onHandleAdd}
                        color={theme.colors.primary}
                    />           
                </View>   
            </Card>
            <Card style={styles.albumContainer}>
                <Text style={styles.album}>La esquina del infinito</Text>
                <Image
                    style={styles.img} 
                    source={{uri:'https://cdn-d15c.kxcdn.com/fotos/discos/000/000/615/original/renga-la-esquina-del-infinito.png'}}
                />
                <View style={styles.btn}>
                 <Button
                        title='Rest'
                        onPress={onHandleRest}
                        color={theme.colors.danger}
                    />
                    <Button
                        title='Add'
                        onPress={onHandleAdd}
                        color={theme.colors.primary}
                    />           
                </View>            
            </Card>
            <Card style={styles.albumContainer}>
                <Text style={styles.album}>El hombre de la estrella</Text>
                <Image
                    style={styles.img} 
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/EstrellaEnRect%C3%A1ngulo.svg/1200px-EstrellaEnRect%C3%A1ngulo.svg.png'}}
                />       
                <View style={styles.btn}>
                    <Button
                        title='Rest'
                        onPress={onHandleRest}
                        color={theme.colors.danger}
                    />
                    <Button
                        title='Add'
                        onPress={onHandleAdd}
                        color={theme.colors.primary}
                    />           
                </View>           
            </Card>
        </View>
    );
}

export default Posters;