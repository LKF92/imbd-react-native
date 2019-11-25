import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button
} from "react-native";
import colors from "../colors";

export default function Actor({ source, name, character }) {
  return (
    <View
      style={{
        width: 130,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: colors.darkGrey,
        marginRight: 10
      }}
    >
      <Image
        resizeMode="cover"
        style={{ height: 200, width: 130 }}
        source={source}
      ></Image>
      <View style={{ padding: 10 }}>
        <Text numberOfLines={1} style={{ color: "white" }}>
          {name}
        </Text>
        <Text
          numberOfLines={1}
          style={{ color: colors.lightGrey, marginTop: 5 }}
        >
          {character}
        </Text>
      </View>
    </View>
  );
}
