import { Text } from "@react-navigation/elements";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Button } from "react-native";

export default function RootLayout() {

  const [soma, setSoma] = useState(1)
  const onPress = () =>setSoma(prevSoma => prevSoma)

  const [subtracao, setsubtração] = useState(100)
  const [multiplicacao, setmultiplicação] = useState(1)
  const [divisao, setdivisão] = useState(100)
  const [raizQuadrada, setRaizQuadrada] = useState(100)


  function somar(){
    setSoma(soma + 1)
  }

  function subtrair(){
    setsubtração(subtracao - 1)
  }

  function multiplicar(){
    setmultiplicação(multiplicacao * 2)
  }

  function dividir(){
    setdivisão(divisao / 2)
  }

  function calcularRaizQuadrada(){
    setRaizQuadrada(Math.sqrt(raizQuadrada))
  }

  return (
    <>
    <SafeAreaView>
    
      <Text>Calculadora</Text>
      <Text>Resultado:</Text>
      <Text>Soma: {soma}</Text>
      <Text>Subtração: {subtracao}</Text>
      <Text>Multiplicação: {multiplicacao}</Text>
      <Text>Divisão: {divisao}</Text>
      <Text>Raiz Quadrada: {raizQuadrada}</Text>

      
      <Text>Operações:</Text>

      <TouchableOpacity 
        onPress={somar}
        style={{
        backgroundColor: "#b4b4adff",
        padding: 5,
        marginVertical: 2,
        borderRadius: 2
  }}
  >
  <Text style={{ 
    color: "white",
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 100
    }}>+</Text>
  </TouchableOpacity>

      <TouchableOpacity 
        onPress={subtrair}
        style={{
        backgroundColor: "#b4b4adff",
        padding: 5,
        marginVertical: 2,
        borderRadius: 2
  }}
  >
  <Text style={{ color: "white" }}>-</Text>
  </TouchableOpacity>

      <TouchableOpacity 
        onPress={multiplicar}
        style={{
        backgroundColor: "#b4b4adff",
        padding: 5,
        marginVertical: 2,
        borderRadius: 2
  }}
  >
  <Text style={{ color: "white" }}>x</Text>
  </TouchableOpacity>

      <TouchableOpacity 
        onPress={dividir}
        style={{
        backgroundColor: "#b4b4adff",
        padding: 5,
        marginVertical: 2,
        borderRadius: 2
  }}
  >
  <Text style={{ color: "white" }}>/</Text>
  </TouchableOpacity>
  
  <TouchableOpacity 
        onPress={calcularRaizQuadrada}
        style={{
        backgroundColor: "#b4b4adff",
        padding: 5,
        marginVertical: 2,
        borderRadius: 2
  }}
  >
  <Text style={{ color: "white" }}>√</Text>
  </TouchableOpacity>

      


    
    

    </SafeAreaView>
    </>

  
    
  );
};
