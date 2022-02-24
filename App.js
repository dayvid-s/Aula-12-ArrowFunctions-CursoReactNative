// para comentar uma linha inteira, ou mais linhas faça ctrl + ;
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import estilos from './styles/styles.js';
import Caixas from './components/caixas.js';

export default class App1 extends Component {
  render() {
    let vexibir = true;
    return (
      <View style={estilos.container}>
        {/* <Image
          source={{
            uri: 'https://meups.com.br/noticias/imagens-fifa-22-aparecem-internet-detalhes/',
          }}
          style={styles.logo}
        /> */}
        {/* OBS: TENTEI DESSA FORMA E DEU ERRADO. */}
        {/* Você pode pegar um arquivo do pc ou da net, com uri */}
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: 'https://meups.com.br/wp-content/uploads/2021/06/FIFA-22.jpg.webp',
          }}
        />
        {/* <Image source={require('./assets/itsHere.png')} style={styles.logo} /> */}
        <Caixas exibir={vexibir} />
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
