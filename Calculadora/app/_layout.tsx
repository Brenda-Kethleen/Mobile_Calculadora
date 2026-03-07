import { Text } from "@react-navigation/elements";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

  const linhas = [
    ["7","8","9","/"],
    ["4","5","6","x"],
    ["1","2","3","-"],
    ["0","√","=","+"]
  ]

  const [soma, setSoma] = useState(1)
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
    <SafeAreaView style={{ padding: 20 }}>
    <Text style={{ fontSize: 30 }}>Calculadora</Text>

      {linhas.map((linha, indexLinha) => (

        <View
          key={indexLinha}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5
          }}
        >

          {linha.map((botao, indexBotao) => (

            <TouchableOpacity
              key={indexBotao}
              style={{
                backgroundColor: "#b4b4ad",
                width: 70,
                padding: 20,
                borderRadius: 10,
                alignItems: "center"
              }}
            >

              <Text style={{ color: "white", fontSize: 20 }}>
                {botao}
              </Text>

            </TouchableOpacity>

          ))}

        </View>

      ))}

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
