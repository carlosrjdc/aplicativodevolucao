import { useEffect, useRef, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import InputTexto from "../Global/InputTexto";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Keyboard } from "react-native";
import Header from "../Global/Header";
import { FlatList } from "react-native";
import DemandaService from "../../services/Demanda";
import CardDemanda from "./CardDemandaSelecionada";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import Helpers from "../../helpers";
import ModaSheetBootom from "../Global/ModaSheetBottom";
import IsLoading from "../Global/isLoading";
import { Ionicons } from "@expo/vector-icons";

export default function PageStartDemanda({ navigation }) {
  const [doca, setDoca] = useState("");
  const [idDemanda, setIdDemanda] = useState("");
  const [demandasEmAberto, setDemandasEmAberto] = useState([]);
  const [infoDemanda, setInfoDemanda] = useState(false);
  const [teste, setTeste] = useState(null);
  const [ver, setVer] = useState(0);
  const [show, setShow] = useState(false);

  const modalizeRef = useRef(null);

  const bottomSheetRef = useRef(null);

  const onOpen = () => {
    bottomSheetRef.current?.expand();
  };

  const onClose = () => {
    bottomSheetRef.current?.collapse();
  };

  async function buscarDemandaPorID() {
    setShow(true);
    await DemandaService.BuscarInfoDeUmaDemanda(idDemanda)
      .then((response) => {
        if (response.data) {
          setInfoDemanda(response);
          setShow(false);
        } else {
          Alert.alert("ID Não localizado!");
          setShow(false);
        }
      })
      .catch((erro) => {
        Alert.alert("ID Não localizado!");
        setShow(false);
      });
  }

  async function iniciarDemanda() {
    setShow(true);
    const dados = await Helpers.lerAsync("@storage_Key");
    await DemandaService.IniciarUmaDemanda(idDemanda, dados.id, doca)
      .then((response) => {
        setDoca("");
        bottomSheetRef.current?.collapse();
        navigation.navigate("listaConferencia", { idDemanda: idDemanda });
        setShow(false);
      })
      .catch((erro) => console.log(erro));
  }

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  async function buscarDemandasEmAbertoCarregarDados() {
    await DemandaService.BuscarDemandasEmAberto()
      .then((response) => setDemandasEmAberto(response))
      .catch((erro) => console.log(erro));
  }

  useEffect(() => {
    buscarDemandasEmAbertoCarregarDados();
  }, []);

  const renderizar = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          Alert.alert("Confirmação", "Deseja realmente retornar essa Demanda?", [
            { text: "Sim", onPress: () => navigation.navigate("listaConferencia", { idDemanda: item.id }) },
            {
              text: "Não",
              style: "cancel",
            },
          ])
        }
      >
        <View style={styles.containerdois}>
          <View style={styles.idStatus}>
            <Text style={{ fontWeight: 600, fontSize: 16 }}>DEMANDA: {item.id}</Text>
            <Text style={{ fontWeight: 600, fontSize: 16 }}>{item.status}</Text>
          </View>
          <View style={styles.placaTransportadora}>
            <Text>PLACA: {item.placa}</Text>
            <Text>{item.transportadora}</Text>
          </View>
          <Text>DOCA: {item.Doca}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        acao={() => {
          navigation.navigate("Login");
        }}
        irPerfil={() => {
          navigation.navigate("profile");
        }}
      />
      <IsLoading show={show} />
      <TouchableOpacity
        onPress={() => {
          setShow(true);
          buscarDemandasEmAbertoCarregarDados()
            .then(() => {
              setShow(false);
            })
            .catch((erro) => console.log(erro));
        }}
        style={{ alignItems: "center", alignSelf: "center", marginTop: 18 }}
      >
        <Ionicons name="ios-reload" size={36} color="black" />
      </TouchableOpacity>

      <View style={styles.conteudo}>
        <Text>{teste}</Text>
        <View style={styles.inputIcon}>
          <InputTexto type={"numeric"} valor={idDemanda} set={setIdDemanda} placeholder="ID Demanda" />
          <TouchableOpacity onPress={buscarDemandaPorID}>
            <FontAwesome5 name="search" size={35} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ width: "95%" }}>
          {infoDemanda && (
            <CardDemanda
              setVer={setVer}
              modalizeRef={modalizeRef}
              onOpen={onOpen}
              navigation={navigation}
              infoDemanda={infoDemanda}
            />
          )}
          <View style={{ alignItems: "center", padding: 8, margin: 4, backgroundColor: "#D7E1E1" }}>
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Demanda em aberto</Text>
          </View>
          <FlatList navigation={navigation} data={demandasEmAberto} renderItem={renderizar} keyExtractor={(item) => item.id} />
        </View>
      </View>
      <ModaSheetBootom bottomSheetRef={bottomSheetRef} index={ver}>
        <View style={{ alignItems: "center", marginTop: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: 600 }}> INFORME DOCA PARA PROSEGUIR</Text>
        </View>
        <View style={{ marginTop: 16, width: "80%" }}>
          <InputTexto valor={doca} set={setDoca} placeholder="Doca" />
        </View>

        <View style={styles.opcoes}>
          <TouchableOpacity onPressIn={hideKeyboard} onPress={() => onClose()}>
            <AntDesign name="closecircle" size={32} color="red" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => iniciarDemanda()}>
            <AntDesign name="checkcircle" size={32} color="green" />
          </TouchableOpacity>
        </View>
      </ModaSheetBootom>
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
  conteudo: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    height: "90%",
  },
  inputIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  containerdois: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: "#DCF2F2",
    margin: 4,
    borderRadius: 5,
  },
  idStatus: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  placaTransportadora: {
    marginBottom: 4,
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "blue",
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  opcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 100,
    marginTop: 24,
    width: "100%",
  },
});
