import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import Constants from "expo-constants";
import colors from "./colors";
import { Ionicons } from "@expo/vector-icons";
import Actor from "./components/Actor";
import InfoSection from "./components/InfoSection";

export default function App() {
  return (
    <ScrollView
      style={{
        marginTop: Constants.statusBarHeight,
        backgroundColor: "black",
        flex: 1
      }}
      // contentContainerStyle={{ backgroundColor: colors.black, flex: 1 }} marche si on met tout ca dans une View
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
          flexDirection: "row",
          ...styles.section
        }}
      >
        <Image
          style={{ height: 150, width: 125 }}
          resizeMode="contain"
          source={require("./assets/interstellar-poster.jpg")}
        />
        <View style={{ marginLeft: 15, flex: 1 }}>
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          ...styles.section
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ flex: 1, alignItems: "center", marginBottom: 10 }}>
            <Ionicons name="ios-star" size={40} color="gold" />
          </View>
          <Text style={{ color: "white" }}>
            <Text style={{ fontSize: 20 }}>8.6</Text>
            <Text>/10</Text>
          </Text>
          <Text style={{ color: colors.lightGrey }}>1.1M</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <Ionicons name="ios-star-outline" size={40} color="white" />
          </View>
          <Text style={{ fontWeight: "normal", color: "white" }}>
            RATE THIS
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              fontSize: 30,
              padding: 5,
              backgroundColor: "#60C24E",
              color: "white"
            }}
          >
            74
          </Text>
          <Text style={{ marginTop: 10, color: "white" }}>Metascore</Text>
          <Text style={{ color: colors.lightGrey }}>46 critic reviews</Text>
        </View>
      </View>
      {/* CAST SECTION */}
      <View style={{ ...styles.section, marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20
          }}
        >
          <Text style={{ color: "white", fontWeight: "normal", fontSize: 25 }}>
            Top Billed Cast
          </Text>
          <Button title="SEE ALL"></Button>
        </View>
        <ScrollView horizontal={true} style={{ marginBottom: 10 }}>
          <Actor
            source={require("./assets/matthew-mc.jpg")}
            name={"Matthew McConnoghey"}
            character={"Cooper"}
          />
          <Actor
            source={require("./assets/anne.jpg")}
            name={"Anne Hathaway"}
            character={"Brand"}
          />
          <Actor
            source={require("./assets/jessica.jpg")}
            name={"Jessica Chastain"}
            character={"Murph"}
          />
          <Actor
            source={require("./assets/john.jpg")}
            name={"John Lithgow"}
            character={"Cooper"}
          />
          <Actor
            source={require("./assets/matt.jpg")}
            name={"Matt Damon"}
            character={"Mann"}
          />
        </ScrollView>
        <InfoSection title={"Director"} description={"Christopher Nolan"} />
        <InfoSection
          title={"Writers"}
          description={
            "Jonathan Nolan (whrtten by) and Christopher Nolan (written by"
          }
        />
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
  subDetail: {
    fontSize: 15,
    color: colors.lightGrey,
    marginTop: 5,
    marginBottom: 15
  },
  btn: {
    padding: 5,
    borderRadius: 20,
    textAlign: "center",
    alignItems: "center"
  }
});
