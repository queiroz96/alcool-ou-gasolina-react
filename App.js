import React, {useState} from "react";
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Modal } from "react-native";
import BestOption from "./src/Modal";

export default function App(){

  const [valorAlcool, setPrecoAlcool] = useState ('')
  const [valorGasolina, setPrecoGasolina] = useState ('')
  let Resultado =  valorAlcool / valorGasolina
  const [visibilidadeModal, setVisibilidadeModal] = useState(false)
  const [ResultadoText, setResultadoText] = useState ('')

  function calcular(){

    if (valorAlcool === ''|| valorGasolina === ''){
      alert ('Preencha todos os campos')
      return;
    }

    if(Resultado < 0.7){
      setResultadoText('Compensa usar Alcool')
    }else{
      setResultadoText('Compensa usar Gasolina')
    }
  
   setVisibilidadeModal(true)
  }

  function Novaconsulta(){
    setVisibilidadeModal(false)
    setPrecoAlcool('')
    setPrecoGasolina('')
  }
  
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.AreaContainer}>
        <Image
        style={styles.logo}
        source={require ('./src/images/logo.png')}
        />

        <Text style={styles.textoLogo}>
          Qual a melhor opção?
        </Text>

      </View>

      <View style={styles.areainputsValores}>
        <Text style={styles.textInput}>Alcool (preço por litro):</Text>
        <TextInput
        keyboardType="numeric"
        style={styles.inputValores}
        placeholder="Digite o preço do alcool"
        value={valorAlcool}
        onChangeText={(text) => setPrecoAlcool(text)}
        >
        </TextInput>

        <Text style={styles.textInput}>Gasolina (preço por litro):</Text>
        <TextInput

        keyboardType="numbers-and-punctuation"
        style={styles.inputValores}
        placeholder="Digite o preço da Gasolina"
        value={valorGasolina}
        onChangeText={(text) => setPrecoGasolina(text)}
        >
        </TextInput>
        
      </View>

      <View style={styles.AreaBotao}>
        <TouchableOpacity 
        style={styles.botaoCalcular}
        onPress={calcular}
        >
          <Text style={{fontSize:20, fontWeight:'bold', color:'#FFF'}}>
          Calcular
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
      animationType="slide" visible={visibilidadeModal} transparent={true}
      >
        <BestOption  Voltar ={Novaconsulta} 
        ResultadoFinal={ResultadoText}
        TextAlcool={valorAlcool}
        TextGasolina={valorGasolina}
        
        />

      </Modal>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    
    backgroundColor:'#363636'

  },

  logo:{
    width:200,
    height:200
  },

  AreaContainer:{
    flex:1, 
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:50
    
  }, 

  textoLogo:{
    fontSize:25,
    fontWeight:'bold',
    color:'#FFF',
    marginTop:20
  }, 

  areainputsValores:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginLeft:35,
    marginRight:5,
    marginTop:100

  }, 

  textInput:{
    fontSize:17,
    color:'#FFF',
    fontWeight:'bold', 
    marginBottom:10,
    paddingTop:10
  }, 

  inputValores:{
    width:'90%',
    height:50,
    backgroundColor:'#FFF',
    paddingLeft: 10, 
    borderRadius: 8, 
    fontSize:15
  }, 

  AreaBotao:{
    flex:1, 
    justifyContent:'flex-start',
    alignItems:'center'
  }, 

  botaoCalcular:{
    width:'80%', 
    backgroundColor:'#FF4500', 
    height:45, 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:8, 
    marginTop:20
  }

})