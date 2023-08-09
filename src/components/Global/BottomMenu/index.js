import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function MyScreen({ navigation, idDemanda }) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("relacaoNotas", { idDemanda: idDemanda })}>
        <Ionicons name="ios-file-tray-full-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Conferencia", { produto: null, descricao: null, idDemanda: idDemanda })}
        style={styles.container}
      >
        <Ionicons name="add-sharp" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("finalizarConferencia", { idDemanda: idDemanda })}>
        <FontAwesome5 name="flag-checkered" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#2881b8",
    top: "-6%",
    padding: 10,
    borderRadius: 1000,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
