import { Text, StyleSheet, View, TouchableOpacity, FlatList, Alert } from "react-native";
import Header from "../../components/Global/Header";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ConferenciaService from "../../services/Conferencia";
import { useEffect, useState } from "react";
import DemandaService from "../../services/Demanda";
import IsLoading from "../Global/isLoading";

export default function PageFinalizarConferencia({ navigation, idDemanda }) {
  const [resultadoFinal, setResultadoFinal] = useState([]);
  const [show, setShow] = useState(false);

  async function verDivergencias() {
    setShow(true);
    await ConferenciaService.resultadoConferencia(idDemanda)
      .then((response) => {
        setResultadoFinal(response);
        setShow(false);
      })
      .catch((erro) => {
        console.log(erro);
        setShow(false);
      });
  }

  async function FinalizarDemanda() {
    setShow(true);
    await DemandaService.FinalizarDemanda(idDemanda)
      .then((response) => {
        Alert.alert("Sucesso", "Demanda Finalizada com sucesso", [
          { text: "Fechar", onPress: () => navigation.navigate("StartDemanda") },
        ]);
        setShow(false);
      })
      .catch(() => {
        Alert.alert("Erro", "Erro ao finalizar a demanda");
        setShow(false);
      });
  }

  const filtrado = resultadoFinal?.filter((filtrar) => filtrar?.diferenca !== 0);

  useEffect(() => {
    verDivergencias();
  }, [navigation]);

  const Renderizar = ({ dados }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("listaConferencia", { pesquisa: dados.produto, idDemanda: idDemanda });
        }}
      >
        <View style={styles.containerdois}>
          <Text style={{ fontSize: 22, fontWeight: 600 }}>Produto: {dados.produto}</Text>
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Descrição: {dados.descricao}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        acao={() => {
          navigation.goBack();
        }}
      />
      <IsLoading show={show} />
      <View style={styles.icones}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ alignItems: "center" }}
        >
          <Entypo name="back" size={45} color="black" />
          <Text style={{ marginTop: 8 }}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Finalizar", "Desejar realmente finalizar essa conferencia?", [
              { text: "Sim", onPress: () => FinalizarDemanda() },
              {
                text: "Não",
                onPress: () => console.log("No Pressed"),
                style: "cancel",
              },
            ]);
          }}
          style={{ alignItems: "center" }}
        >
          <AntDesign name="checkcircle" size={45} color="green" />
          <Text style={{ marginTop: 8 }}>Confirmar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerDivergencia}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Lista de Divergencias</Text>
      </View>
      <View style={{ height: "60%" }}>
        <FlatList
          scrollEnabled={true}
          data={filtrado}
          renderItem={({ item }) => <Renderizar dados={item} />}
          keyExtractor={(item) => item.id}
        />
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
  icones: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 100,
  },
  containerdois: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: "#DCF2F2",
    margin: 4,
    borderRadius: 5,
  },
  containerDivergencia: {
    alignItems: "center",
    marginTop: 32,
    margin: 8,
    padding: 8,
    backgroundColor: "#F8F8F8",
  },
});
