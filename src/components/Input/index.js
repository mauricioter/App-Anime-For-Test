import React, { useState } from "react";
import { StyleSheet, TextInput, View, onChangeText, SafeAreaView, Text, FlatList } from "react-native";
import style from "./style";
import animes from "../../../animes";

export default function Input() {
  const [search, setSearchWord] = useState('')


  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        onChangeText={setSearchWord}
        value={buscar}
        // textAlign="center"
        placeholder="Search"
      />
    </View>
  );
};
// const [text, onChangeText] = React.useState('');
// function buscar(nomeDoAnime) {
//   animes.forEach(function (anime) {
//     if (anime.title.romaji === nomeDoAnime) {
//       console.log(anime)
//     } else {
//       return false
//     }
//   })
// }

{/* <FlatList
    data={animes}
    keyExtractor={(anime) => String(anime.id)}
    /> */}