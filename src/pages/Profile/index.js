import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Header from "../../components/Global/Header";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import AuthService from "../../services/AuthService";

export default function Profile({ navigation }) {
  async function Deslogar() {
    await AuthService.Deslogar()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={{ marginTop: 100, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            Deslogar();
          }}
        >
          <SimpleLineIcons name="logout" size={32} color="red" />
          <Text style={{ marginTop: 8 }}>SAIR</Text>
        </TouchableOpacity>
      </View>
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
  perfil: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
  },
});
