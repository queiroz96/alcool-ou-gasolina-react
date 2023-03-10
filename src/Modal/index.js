import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function BestOption(props){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>

                <Image
                style={styles.imgcombustivel}
                source={require ('../images/gas.png')}
                />
            <Text style={{fontSize:25, color:'#00FF7F', fontWeight:'bold', marginBottom:20}}>
                {props.ResultadoFinal}
            </Text>

            <Text style={{fontSize:21, color:'#FFF', fontWeight:'bold', marginBottom:20}}>
                Com os preços:
            </Text>

            <Text style={styles.textoprecos}>
                Alcool: {props.TextAlcool}
            </Text>

            <Text style={styles.textoprecos}>
                Gasolina: {props.TextGasolina}
            </Text>

            <TouchableOpacity style={styles.btnNewcalc} onPress={props.Voltar}>
                <Text style={{fontSize:16, color:'red', fontWeight:'bold'}}>
                    Calcular novamente
                    
                </Text>
            </TouchableOpacity>

            <View style={styles.AreaDescricao}>
            <Text style={{fontSize:18, color:'#FFF', fontWeight:'bold', marginBottom:15}}>Entenda como o cálculo é feito</Text>

           <Text style={{fontSize:16, color:'#FFF', paddingStart:10}}> Dividimos o valor do litro do álcool pelo da gasolina.

            Quando o resultado é menor que 0,7, a recomendação é abastecer com álcool. Se maior, a recomendação é escolher a gasolina.
            </Text>
            </View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#363636', 
        justifyContent:'center',
        alignItems:'center'
    }, 

    card:{
        flex:1,
        justifyContent:'flex-start', 
        alignItems:'center', 
     marginTop:70 

    },

    imgcombustivel:{
        width:150,
        height:150, 
        marginBottom:30
    }, 

    textoprecos:{
        fontSize:17, 
        color:'#FFF', 
        padding:10
    }, 
    btnNewcalc:{
         
        width:200, 
        height:35, 
        borderRadius:5,
        borderWidth:2, 
        borderColor:'red', 
        alignItems:'center',
        justifyContent:'center', 
        marginTop:40
    }, 

    AreaDescricao:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center', 
        marginRight:10, 
        marginStart:10
    }
})