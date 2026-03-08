import { Text } from "@react-navigation/elements";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

  const linhas: string[][] = [
    ["|x|","AC","%","/"],
    ["7","8","9","x"],
    ["4","5","6","-"],
    ["1","2","3","+"],
    ["√","0",",","="]
  ]

  const [display, setDisplay] = useState<string>("0")
  const [valorAnterior, setValorAnterior] = useState<number | null>(null)
  const [operacao, setOperacao] = useState<string | null>(null)


  function executarOperacao(botao: string){

  if(!isNaN(Number(botao))){
    adicionarNumero(botao)
    return
  }

  if(botao === "+" || botao === "-" || botao === "x" || botao === "/"){
    definirOperacao(botao)
    return
  }

  if(botao === "="){
    calcularResultado()
    return
  }

  if(botao === "AC"){
    setDisplay("0")
    setValorAnterior(null)
    setOperacao(null)
  }

}

function calcularResultado(){

  if(valorAnterior === null || operacao === null) return

  const atual = Number(display)
  let resultado = 0

  if(operacao === "+") resultado = valorAnterior + atual
  if(operacao === "-") resultado = valorAnterior - atual
  if(operacao === "x") resultado = valorAnterior * atual
  if(operacao === "/") resultado = valorAnterior / atual

  setDisplay(resultado.toString())
  setValorAnterior(null)
  setOperacao(null)

}

function adicionarNumero(numero: string){

  if(display === "0"){
    setDisplay(numero)
  } else {
    setDisplay(display + numero)
  }

}


  function definirOperacao(op: string){
  setValorAnterior(Number(display))
  setOperacao(op)
  setDisplay("0")
}

  return (
    
    <SafeAreaView style={{ padding: 20 }}>
    <Text style={{ 
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center"
      }}>Calculadora</Text>

      

    <View
      style={{
      backgroundColor: "#e6e6e6",
      padding:15,
      marginBottom: 20,
      borderRadius: 10,
      width: 315,
      alignItems: "flex-end",
      margin: "auto"
      
    }}
>
  <Text style={{ fontSize: 30 }}>
    {display}
  </Text>
</View>

      {linhas.map((linha, indexLinha) => (

        <View
          key={indexLinha}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 2
          }}
        >

          {linha.map((botao, indexBotao) => (

            <TouchableOpacity
              key={indexBotao}
              onPress={() => executarOperacao(botao)}
              style={{
                backgroundColor: "#b4b4ad",
                width: 70,
                padding: 20,
                borderRadius: 10,
                alignItems: "center",
                margin: 5
              }}
            >

              <Text style={{ color: "white", fontSize: 20 }}>
                {botao}
              </Text>

            </TouchableOpacity>

          ))}

        </View>

      ))}


    </SafeAreaView>
      
  );
};
