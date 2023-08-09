import { Text, TouchableOpacity, FlatList, View, StyleSheet, TextInput } from "react-native";
import Helpers from "../../../helpers";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function ListagemItensReentrega({ itensConferencia, navigation, route }) {
  const { idDemanda } = route.params;
  const [pesquisar, setPesquisar] = useState("");

  const filtro = Helpers.filterAndGetProducts(itensConferencia).filter((filtrar) => filtrar.motivo === "Reentrega");

  const Filtrado =
    pesquisar.length > 0 ? filtro.filter((filtrar) => filtrar.produto.toString().includes(pesquisar.toString())) : filtro;

  const Renderizar = ({ dados }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Conferencia", { produto: dados.produto, descricao: dados.descricao, idDemanda: idDemanda })
        }
      >
        <View style={styles.containerdois}>
          <Text style={{ fontSize: 22, fontWeight: 600 }}>Produto: {dados.produto}</Text>
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Descrição: {dados.descricao}</Text>
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Quantidade: {dados.quantidade}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ height: "85%" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput value={pesquisar} onChangeText={setPesquisar} style={styles.input} placeholder="pesquisar" />
        <TouchableOpacity onPress={() => setPesquisar("")}>
          <MaterialIcons name="cleaning-services" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        scrollEnabled={true}
        data={Filtrado}
        renderItem={({ item }) => <Renderizar dados={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
    flexDirection: "column",
  },
  conteudo: {
    marginTop: 40,
    width: "100%",
    justifyContent: "Center",
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
  input: {
    width: "85%",
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
});
