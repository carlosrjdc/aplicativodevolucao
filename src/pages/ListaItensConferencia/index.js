import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Global/Header";
import PageListaDeConferencia from "../../components/PageListaItensConferencia";
import { useEffect, useState } from "react";
import ConferenciaService from "../../services/Conferencia";
import MyScreen from "../../components/Global/BottomMenu";
import IsLoading from "../../components/Global/isLoading";
import Conferencia from "../Conferencia";

export default function ListaItensConferencia({ navigation, route }) {
  const [itensConferencia, setItensConferencia] = useState([]);
  const [itensFisico, setItensFisico] = useState([]);
  const { idDemanda } = route.params;
  const [show, setShow] = useState(false);

  async function buscarItensConferenciaFisica() {
    await ConferenciaService.buscarItensConferenciaFisica(idDemanda)
      .then((response) => setItensFisico(response))
      .catch((erro) => console.log(erro));
  }

  async function buscarItensConferencia() {
    await ConferenciaService.BucarItensParaConferencia(idDemanda)
      .then((response) => {
        setItensConferencia(response);
        setShow(false);
      })
      .catch((erro = console.log(erro)));
  }

  useEffect(() => {
    setShow(true);
    const unsubscribe = navigation.addListener("focus", () => {
      Promise.all([buscarItensConferencia(), buscarItensConferenciaFisica()])
        .then((response) => {
          setItensConferencia(response);
          setShow(false);
        })
        .catch((erro) => console.log(erro));
    });
  }, []);

  //itensparaconferencia

  return (
    <View style={styles.container}>
      <Header
        acao={() => {
          navigation.navigate("StartDemanda");
        }}
        irPerfil={() => {
          navigation.navigate("profile");
        }}
      />
      <IsLoading show={show} />
      <PageListaDeConferencia
        route={route}
        navigation={navigation}
        itensConferencia={itensConferencia}
        itensFisico={itensFisico}
      />
      <MyScreen idDemanda={idDemanda} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
  },
});
