import { useState } from "react";
import InputTexto from "../Global/InputTexto";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Botao from "../Global/Botao";
import AuthService from "../../services/AuthService";
import Helpers from "../../helpers";
import { Alert } from "react-native";
import IsLoading from "../Global/isLoading";

export default function PageLogin({ navigation, senha, setSenha, usuario, setUsuario }) {
  const [show, setShow] = useState(false);

  async function Autentircar() {
    setShow(true);

    AuthService.Autenticacao(usuario, senha)
      .then(async (response) => {
        if (response.token) {
          Helpers.gravarAsync("@storage_Key", response);
          navigation.navigate("StartDemanda");
          setShow(false);
          setSenha("");
          setUsuario("");
        } else {
          Alert.alert("Login ou Senha invalidos!");
          setShow(false);
        }
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <View style={styles.containerprincipal}>
      <IsLoading show={show} />
      <View style={styles.container}>
        <View style={styles.icone}>
          <FontAwesome5 name="boxes" size={70} color="black" />
        </View>
        <InputTexto type={"numeric"} valor={usuario} set={setUsuario} placeholder="Login" />
        <InputTexto valor={senha} set={setSenha} placeholder="Senha" senha={true} />
        <Botao
          acao={() => {
            Autentircar();
          }}
          label="Login"
        />
      </View>
      <View style={styles.rodape}>
        <Text style={styles.textorodape}>developed by Carlos Rosa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerprincipal: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    marginTop: 40,
    textAlign: "center",
    width: "100%",
    alignItems: "center",
  },
  icone: {
    margin: 20,
  },
  rodape: {
    paddingBottom: 40,
  },
  textorodape: {
    fontSize: 10,
    borderBottomWidth: 1,
  },
});
