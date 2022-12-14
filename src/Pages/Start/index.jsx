import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


import LifeStatus from '../../Components/Common/LifeStatus';
import DefualtButton from '../../Components/Common/DefultButton/inde';

export default function Start() {

  const handlerNavigationExplanation  = () =>{
    console.log('Testando clique')
  }

  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false }>
            <View style={{alignItems: 'center'}}>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/icons/logo3.png')}
                />
                <LifeStatus />
                <Text style={styles.description}>
                    Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"} o melhor nível.
                </Text>

                <DefualtButton
                    buttonText={"Continuar"}
                    handlePress={handlerNavigationExplanation}
                    width={250}
                    height={50}
                />
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(21, 21, 0 , 90)',
        marginTop: Constants.statusBarHeight,

    },
    logo:{
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },
    description:{
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 60
    },  
});