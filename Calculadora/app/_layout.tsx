import { Text } from "@react-navigation/elements";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

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
    <SafeAreaView>
      <Text>Calculadora</Text>
      <Text>Resultado:</Text>
      <Text>Soma: {soma}</Text>
      <Text>Subtração: {subtracao}</Text>
      <Text>Multiplicação: {multiplicacao}</Text>
      <Text>Divisão: {divisao}</Text>
      <Text>Raiz Quadrada: {raizQuadrada}</Text>

      <br></br>
      <Text>Operações:</Text>

      <TouchableOpacity onPress={somar}>
        <Text>Soma: +1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={subtrair}>
        <Text>Subtração: -1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={multiplicar}>
        <Text>Multiplicação: *2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={dividir}>
        <Text>Divisão: /2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={calcularRaizQuadrada}>
        <Text>Raiz Quadrada: √</Text>
      </TouchableOpacity>

    </SafeAreaView>
    </>
    
  );
}