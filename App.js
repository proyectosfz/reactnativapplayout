import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{alignItems:'center'}}>
        <Text>Grid con React</Text>
      </View>
      <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        <View style={{width:100,height:100,margin:10,backgroundColor:'coral'}}></View>
        <View style={{width:100,height:100,margin:10,backgroundColor:'skyblue'}}></View>
        <View style={{width:100,height:100,margin:10,backgroundColor:'khaki'}}></View>
        <View style={{width:100,height:100,margin:10,backgroundColor:'pink'}}></View>
        <View style={{width:100,height:100,margin:10,backgroundColor:'purple'}}></View>
        <View style={{width:100,height:100,margin:10,backgroundColor:'powderblue'}}></View>
        <View style={{width:100,height:100,margin:10,backgroundColor:'aqua'}}></View>
        <View style={{width:100,height:100,margin:10,backgroundColor:'maroon'}}></View>
        <View style={{width:100,height:100,margin:10,backgroundColor:'peru'}}></View>
      </View>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
