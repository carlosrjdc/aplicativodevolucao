import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Keyboard } from "react-native";
import PageConferenciaProduto from "./Produto";
import PageConferenciaLote from "./Lote";
import PageConferenciaQuantidade from "./Quantidade";
import PageConferenciaAvaria from "./Avaria";
import AuxiliarListaConferencia from "./Tab";
import ModaSheetBootom from "../Global/ModaSheetBottom";
import CardConfirmacao from "./CardConfirmacaoConferencia";

export default function PageConferenciaTabs({ route, navigation }) {
  const [activeTab, setActiveTab] = useState(1);
  const [material, setMaterial] = useState("");
  const [descMaterial, setDescMaterial] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [sif, setSif] = useState("");
  const [lote, setLote] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [avaria, setAvaria] = useState("");
  const [obs, setObs] = useState("");
  const [ver, setVer] = useState(0);

  const bottomSheetRef = useRef(null);

  const onOpen = () => {
    Keyboard.dismiss();
    bottomSheetRef.current?.expand();
  };

  const onClose = () => {
    bottomSheetRef.current?.collapse();
  };

  const objConferencia = {
    material,
    setMaterial,
    temperatura,
    setTemperatura,
    sif,
    setSif,
    lote,
    setLote,
    quantidade,
    setQuantidade,
    avaria,
    setAvaria,
    obs,
    setObs,
    descMaterial,
    setDescMaterial,
  };

  let componentToRender;
  switch (activeTab) {
    case 1:
      componentToRender = <PageConferenciaProduto setActiveTab={setActiveTab} objConferencia={objConferencia} route={route} />;
      break;
    case 2:
      componentToRender = <PageConferenciaLote objConferencia={objConferencia} setActiveTab={setActiveTab} />;
      break;
    case 3:
      componentToRender = <PageConferenciaQuantidade setActiveTab={setActiveTab} objConferencia={objConferencia} />;
      break;
    case 4:
      componentToRender = <PageConferenciaAvaria onOpen={onOpen} setActiveTab={setActiveTab} objConferencia={objConferencia} />;
      break;
  }

  return (
    <View style={styles.container}>
      <AuxiliarListaConferencia activeTab={activeTab} setActiveTab={setActiveTab} />
      {componentToRender}
      <ModaSheetBootom bottomSheetRef={bottomSheetRef} index={ver}>
        <CardConfirmacao route={route} navigation={navigation} onClose={onClose} objConferencia={objConferencia} />
      </ModaSheetBootom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  topBar: {
    flexDirection: "row",
    backgroundColor: "#eee",
    height: 50,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  topBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topBarButtonText: {
    fontSize: 16,
  },
  activeTopBarButton: {
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
  activeTopBarButtonText: {
    fontWeight: "bold",
    color: "blue",
  },
});
