import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, ScrollView } from 'react-native';
import Animes from './src/components/animes';
import Input from './src/components/Input';
import animes from './animes';



export default function App() {
  function buscar(nomeDoAnime) {
    animes.forEach(function (anime) {
      if (anime.title.romaji === nomeDoAnime) {
        console.log(anime)
      } else {
        return false
      }
    })
  }
  buscar("")

  return (
    <SafeAreaView style={style.body}>

      <StatusBar backgroundColor='white' barStyle={'dark-content'} />
      <View style={style.container}>
        <Text style={style.text1}>
          Browse Anime
        </Text>
      </View>
      <View>
        <Input />
      </View>
      <ScrollView>
        <View style={style.frontV}>
          <Text>TRENDING NOW</Text>
          <Text> View All</Text>
        </View>
        <View>
          <Animes animes={animes.filter} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  body: {
    backgroundColor: "#E6E8FA",
    flex: 1
  },
  text1: {
    fontSize: 35,
  },
  container: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  frontV: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20
  }
})