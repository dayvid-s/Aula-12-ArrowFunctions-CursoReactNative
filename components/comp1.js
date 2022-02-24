/* eslint-disable prettier/prettier */
//conceito de props, enviando valores para os componentes por propriedades.
import React from 'react';
import {Text} from 'react-native';
import styles from '../styles/styles';
let nt;
export default function (props) {
    nt = props.nota;
    return (
      <Text style={styles.textoCursos} > CFB CURSOS - Curso de {props.curso}: Nota= {nt} </Text>
    );
}
