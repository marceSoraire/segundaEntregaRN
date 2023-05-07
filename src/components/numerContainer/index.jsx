import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";

const NumerContainer = ({ number }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numer}>{number}</Text>
        </View>
    );
};

export default NumerContainer;