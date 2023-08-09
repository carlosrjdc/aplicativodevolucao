import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Helpers from "../../../helpers";
import { useEffect, useState } from "react";

export default function Header({ acao, irPerfil = () => {} }) {
  const [user, setUser] = useState("");

  async function CarregarDadosIniciais() {
    const dados = Helpers.lerAsync("@storage_Key")
      .then((response) => setUser(response))
      .catch((erro) => console.log(erro));
  }

  useEffect(() => {
    CarregarDadosIniciais();
  }, []);

  return (
    <View style={styles.cabecalho}>
      <TouchableOpacity onPress={acao}>
        <Text style={styles.texto}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={irPerfil}>
        <View style={styles.perfil}>
          <Text style={styles.texto}>{user?.user}</Text>
          <FontAwesome name="user-circle" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    backgroundColor: "#0050C8",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  perfil: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
  },
  texto: {
    marginRight: 8,
    color: "#fff",
    fontSize: 16,
  },
});
