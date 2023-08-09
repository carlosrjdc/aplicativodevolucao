import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Header from "../../components/Global/Header";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PageFinalizarConferencia from "../../components/PageFinalizarConferencia";

export default function FinalizarConferencia({ navigation, route }) {
  const { idDemanda } = route.params;
  return <PageFinalizarConferencia idDemanda={idDemanda} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    width: "100%",
    flexDirection: "column",
  },
  icones: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 100,
  },
  containerDivergencia: {
    alignItems: "center",
    marginTop: 32,
    margin: 8,
    padding: 8,
    backgroundColor: "#F8F8F8",
  },
});
