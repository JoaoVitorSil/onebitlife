import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

export default function AppExplanation() {

    const handlerSetShowHome =()=>{
        console.log('Botão clicado')
    }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>
            Antes, deixa {"\n"} eu te explicar...
          </Text>
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir na vida?   
          </Text>
          <Text style={styles.description}>
            Na próxima tela você vai poder escolher {"\n"} seus 4 hábitos de forma individual. 
          </Text>
          <DefualtButton
            buttonText={"Continuar"}
            handlePress={handlerSetShowHome}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 0 , 90)",
    marginTop: Constants.statusBarHeight,
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: 'center',
    marginVertical: 40,
  },
  descriptionCta:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  description:{
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
});
