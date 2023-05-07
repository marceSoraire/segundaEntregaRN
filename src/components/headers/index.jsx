import { View, Text } from 'react-native';
import { styles } from './styles';

const Header =({ title })=> {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

export default Header;