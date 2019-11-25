import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import colors from "./colors";

export default function App() {
  return (
    <ScrollView
      style={{ marginTop: Constants.statusBarHeight, backgroundColor: "grey" }}
      contentContainerStyle={{ backgroundColor: colors.black, flex: 1 }}
    >
      <View
        style={{
          height: 50,
          backgroundColor: colors.darkGrey,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          resizeMode="contain"
          style={{ height: 40 }}
          source={require("./assets/imdb-logo.jpeg")}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Interstellar</Text>
        <Text style={styles.subDetail}>
          2014 PG-13 2h49min Adventure, Drama, Sci-fi
        </Text>
      </View>
      <View
        style={{
          ...styles.section,
          flexDirection: "row"
        }}
      >
        <Image
          resizeMode="contain"
          style={{ height: 50, backgroundColor: "pink" }}
          source={require("./assets/interstellar-poster.jpg")}
        />
        <View style={{ marginLeft: 15, backgroundColor: "blue" }}>
          <Text style={{ color: "white", fontSize: 14, lineHeight: 20 }}>
            A team of explorers travel through a wormhole in space in an attempt
            to ensure humanity's survival.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: colors.blue,
              marginTop: 20,
              ...styles.btn
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold"
              }}
            >
              + ADD TO WATCHLIST
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: colors.black2,
    padding: 15
  },
  title: {
    fontSize: 45,
    fontWeight: "normal",
    color: "white",
    marginTop: 10,
    marginBottom: 10
  },
  subDetail: { fontSize: 15, color: "grey", marginTop: 5, marginBottom: 15 },
  btn: {
    padding: 5,
    borderRadius: 20,
    textAlign: "center",
    alignItems: "center"
  }
});
