import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ListagemItensReentrega from "./Reentrega";
import ListagemItensRetorno from "./Retorno";
import ListagemItensConferencia from "./Conferencia";

function TopBar({ activeTab, setActiveTab }) {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity
        style={[styles.topBarButton, activeTab === 1 && styles.activeTopBarButton]}
        onPress={() => setActiveTab(1)}
      >
        <Text style={[styles.topBarButtonText, activeTab === 1 && styles.activeTopBarButtonText]}>REENTREGA</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.topBarButton, activeTab === 2 && styles.activeTopBarButton]}
        onPress={() => setActiveTab(2)}
      >
        <Text style={[styles.topBarButtonText, activeTab === 2 && styles.activeTopBarButtonText]}>RETORNO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.topBarButton, activeTab === 3 && styles.activeTopBarButton]}
        onPress={() => setActiveTab(3)}
      >
        <Text style={[styles.topBarButtonText, activeTab === 3 && styles.activeTopBarButtonText]}>CONFERENCIA</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function PageListaDeConferencia({ itensConferencia, navigation, itensFisico, route }) {
  const [activeTab, setActiveTab] = useState(1);

  let componentToRender;
  switch (activeTab) {
    case 1:
      componentToRender = <ListagemItensReentrega route={route} navigation={navigation} itensConferencia={itensConferencia} />;
      break;
    case 2:
      componentToRender = <ListagemItensRetorno route={route} navigation={navigation} itensConferencia={itensConferencia} />;
      break;
    case 3:
      componentToRender = (
        <ListagemItensConferencia
          setActiveTab={setActiveTab}
          route={route}
          navigation={navigation}
          itensConferencia={itensFisico}
        />
      );
      break;
  }

  return (
    <View style={styles.container}>
      <TopBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {componentToRender}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

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
