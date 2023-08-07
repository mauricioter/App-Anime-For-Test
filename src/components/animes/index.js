import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import style from "./style";
import animes from "../../../animes";

export default function Animes(props) {
  return (
    <View style={style.containerImg} >
      {props.animes.map(function (anime) {
        return (
          <View style={style.container} key={anime.id}>
            <Image
              style={style.image}
              source={{
                uri: anime.coverImage.large
              }}
            />
            <Text>
              {anime.title.romaji}
            </Text>
          </View>
        )
      })}
    </View>
  )
}