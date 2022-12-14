import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function DefualtButton({
    buttonText,
    handlePress,
    width,
    height,
}){
    return(
        <TouchableOpacity 
            style={[styles.button, {height: height, width: width}]}
            activeOpacity={0.7} 
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
    }, 
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});