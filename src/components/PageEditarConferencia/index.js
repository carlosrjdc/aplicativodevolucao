import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import InputTexto from "../Global/InputTexto";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ConferenciaService from "../../services/Conferencia";

export default function PageEditarConferencia({ route, navigation }) {
  const { item } = route.params;

  const [quantidade, setQuantidade] = useState(item.quantidade.toString());
  const [avaria, setAvaria] = useState(item.quantidadeAvaria.toString());
  const [temperatura, setTemperatura] = useState(item.temperatura.toString());
  const [sif, setSif] = useState(item.sif.toString());
  const [lote, setLote] = useState(item.lote.toString());
  const [obs, setObs] = useState(item.observacao.toString());

  async function AtualizarRegistro() {
    await ConferenciaService.editarConferenciaFisica(item.id, temperatura, quantidade, avaria, sif, lote, obs)
      .then((response) => {
        Alert.alert("Sucesso", "Registro Editado com sucesso");
        navigation.goBack();
      })
      .catch((erro) => console.log(erro));
  }

  async function DeletarRegistro() {
    await ConferenciaService.deletarItemConferencia(item.id).then((response) => {
      Alert.alert("Sucesso", "Registro deletado com sucesso");
      navigation.goBack();
    });
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: 600 }}>{item.produto}</Text>
      <Text style={{ fontSize: 18, fontWeight: 600 }}>{item.materiais.descricao}</Text>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 32,
          marginTop: 16,
          width: "95%",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text>Temperatura:</Text>
        <InputTexto valor={temperatura} set={setTemperatura} />
      </View>
      <View style={{ flexDirection: "row", marginHorizontal: 32, width: "95%", alignItems: "center", alignSelf: "center" }}>
        <Text>Quantidade:</Text>
        <InputTexto type="numeric" valor={quantidade} set={setQuantidade} />
      </View>
      <View style={{ flexDirection: "row", marginHorizontal: 32, width: "95%", alignItems: "center", alignSelf: "center" }}>
        <Text>Avaria:</Text>
        <InputTexto type="numeric" valor={avaria} set={setAvaria} />
      </View>
      <View style={{ flexDirection: "row", marginHorizontal: 32, width: "95%", alignItems: "center", alignSelf: "center" }}>
        <Text>Sif:</Text>
        <InputTexto type="numeric" valor={sif} set={setSif} />
      </View>
      <View style={{ flexDirection: "row", marginHorizontal: 32, width: "95%", alignItems: "center", alignSelf: "center" }}>
        <Text>Fabricação:</Text>
        <InputTexto valor={lote} set={setLote} />
      </View>
      <View style={{ flexDirection: "row", marginHorizontal: 32, width: "95%", alignItems: "center", alignSelf: "center" }}>
        <Text>Obs:</Text>
        <InputTexto type="numbers-and-punctuation" valor={obs} set={setObs} />
      </View>
      <View style={styles.icones}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Editar", "Desejar confirma essa edição?", [
              { text: "Sim", onPress: () => AtualizarRegistro() },
              {
                text: "Não",
                onPress: () => console.log("No Pressed"),
                style: "cancel",
              },
            ]);
          }}
        >
          <FontAwesome name="edit" size={45} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Deletar", "Desejar confirma essa exclusão?", [
              { text: "Sim", onPress: () => DeletarRegistro() },
              {
                text: "Não",
                onPress: () => console.log("No Pressed"),
                style: "cancel",
              },
            ]);
          }}
        >
          <MaterialCommunityIcons name="delete-outline" size={45} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 8,
  },
  icones: {
    marginTop: 64,
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
