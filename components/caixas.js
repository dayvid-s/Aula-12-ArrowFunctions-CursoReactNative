/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles*/
/* eslint-disable prettier/prettier */

import React from 'react';
import {View} from 'react-native';

// ctrl+. correção rapida
export default function (props) {
    return (
    <View style={{width: '100%',height:300, flexDirection:'column',alignItems:'stretch', justifyContent:'center'}}>
        {
            props.exibir ?
            <View style= {{flex:1}}>
                <View style={{flexGrow:1,backgroundColor:'#00f'}}  />
                <View style={{flexGrow:1,backgroundColor:'#00a'}}  />
                <View style={{flexGrow:1,backgroundColor:'#005'}}  />
            </View>
            :
            <View style= {{flex:1}} >
                <View style={{flexGrow:1,backgroundColor:'#f00'}}  />
                <View style={{flexGrow:1,backgroundColor:'#a00'}}  />
                <View style={{flexGrow:1,backgroundColor:'#500'}}  />
            </View>
         }
    </View>
   );
}
