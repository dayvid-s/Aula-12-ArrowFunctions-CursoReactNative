// para comentar uma linha inteira, ou mais linhas faça ctrl + ;
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import estilos from './styles/styles.js';

/*
a próxima função em arrow function fica assim:
(n)=>{return n*2}
ou, caso tenha apenas um parametro
n =>{return n*2}

(n1,n2)=>{return n1 + n2}
*/

// function dobro(n) {
//   return n * 2;
//   ao inves disso
//    faça arrow function
//  desse jeito
const dobro = n => {
  return n * 2;
};
//ou de forma mais reduzida ainda
// const dobro =n=>n*2   isso porque só tem um parametro

// aqui está uma função antiga
// function soma(n1, n2) {
//   return n1 + n2;
// }
// versão dela nova
const soma = (n1, n2) => {
  return n1 + n2;
};
//ou de forma reduzida
// const soma= (n1,n2)=> n1+n2/
export default class App1 extends Component {
  render() {
    let vexibir = true;
    return (
      <View style={estilos.container}>
        <Text>{dobro(2)}</Text>
        <Text>{soma(2, 4)}</Text>
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: 'https://meups.com.br/wp-content/uploads/2021/06/FIFA-22.jpg.webp',
          }}
        />
        <Text style={estilos.textoPadrao}>youtube.com/cfbcursos </Text>
        <Text style={estilos.textoTitulo}>cfbcursos.com.br</Text>
        {vexibir ? <Text>Curso de react native</Text> : <Text>- - -</Text>}
        {vexibir && <Text>Curso de react native</Text>}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    width: 380,
    resizeMode: 'cover',
  },
});
