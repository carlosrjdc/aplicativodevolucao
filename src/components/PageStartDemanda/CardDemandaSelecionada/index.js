import { Text, View, StyleSheet } from "react-native";
import Botao from "../../Global/Botao";
import { useRef, useState } from "react";
import { ModalComponent } from "../../Global/ModalComponent";
import ModaSheetBootom from "../../Global/ModaSheetBottom";

export default function CardDemanda({ infoDemanda, modalizeRef, onOpen, setVer }) {
  return (
    <View style={styles.container}>
      <View style={styles.idStatus}>
        <Text style={{ fontWeight: 600, fontSize: 18 }}>{infoDemanda?.id ? `DEMANDA: ${infoDemanda?.id}` : null}</Text>
        <Text style={{ fontWeight: 600, fontSize: 18 }}>{infoDemanda?.status}</Text>
      </View>
      <View style={styles.idStatus}>
        <Text style={{ fontWeight: 600, fontSize: 18 }}>{infoDemanda?.placa}</Text>
        <Text style={{ fontWeight: 600, fontSize: 18 }}>{infoDemanda?.transportadora}</Text>
      </View>
      <Text style={{ fontWeight: 600, fontSize: 18 }}>{infoDemanda?.data}</Text>
      <Botao habilitar={infoDemanda?.status !== "A Conferir"} acao={() => onOpen()} label="Iniciar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: "#E1D6D6",
  },
  idStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 4,
  },
});
