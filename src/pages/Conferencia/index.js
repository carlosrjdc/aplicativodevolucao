import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Global/Header";
import { useNavigation } from "@react-navigation/native";

import PageConferenciaTabs from "../../components/PageConferencia";


const Tab = createMaterialTopTabNavigator();

export default function Conferencia({ navigation, route }) {
  const navegar = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        acao={() => {
          navigation.goBack();
        }}
        irPerfil={() => {
          navigation.navigate("profile");
        }}
      />

      <PageConferenciaTabs navigation={navigation} route={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    width: "100%",
    flexDirection: "column",
  },
});
