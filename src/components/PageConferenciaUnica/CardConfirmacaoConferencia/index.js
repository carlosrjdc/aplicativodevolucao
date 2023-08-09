import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ConferenciaService from "../../../services/Conferencia";
import IsLoading from "../../Global/isLoading";
import { useState } from "react";

export default function CardConfirmacao({ objConferencia, onClose, navigation, route }) {
  const { idDemanda } = route.params;
  const { material, temperatura, sif, lote, quantidade, avaria, obs, descMaterial } = objConferencia;
  const [show, setShow] = useState(false);

  async function cadastrarConferencia() {
    setShow(true);
    await ConferenciaService.AddProdutoConferencia(idDemanda, material, temperatura, sif, lote, quantidade, avaria, obs)
      .then((response) => {
        Alert.alert("Sucesso", response, [{ text: "Sim", onPress: () => navigation.goBack() }]);
        setShow(false);
      })
      .catch((erro) => {
        console.log(erro);
        setShow(false);
      });
  }

  return (
    <View>
      <IsLoading show={show} />
      <View style={styles.container}>
        <Text style={styles.texto}>{material}</Text>
        <Text style={styles.texto}>{descMaterial}</Text>
        <Text style={styles.texto}>{temperatura}</Text>
        <Text style={styles.texto}>SIF: {sif}</Text>
        <Text style={styles.texto}>FABRICAÇÃO: {lote}</Text>
        <Text style={styles.texto}>QUANTIDADE: {quantidade}</Text>
        <Text style={styles.texto}>AVARIA: {avaria}</Text>
        <Text style={styles.texto}>OBS: {obs}</Text>
      </View>
      <View style={styles.icones}>
        <TouchableOpacity onPress={() => onClose()}>
          <AntDesign name="closecircle" size={36} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={cadastrarConferencia}>
          <AntDesign name="checkcircle" size={36} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icones: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 26,
    marginTop: 36,
  },
  texto: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 1.5,
  },
});
