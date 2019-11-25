import React from "react";
import { Text, View } from "react-native";
import colors from "../colors";
export default function InfoSection({ title, description }) {
  return (
    <View style={{ marginTop: 10, marginBottom: 10 }}>
      <Text style={{ color: "white", fontSize: 17 }}>{title}</Text>
      <Text style={{ color: colors.lightGrey }}>{description}</Text>
    </View>
  );
}
