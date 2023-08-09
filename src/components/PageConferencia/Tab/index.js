import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AuxiliarListaConferencia({ activeTab, setActiveTab }) {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity style={[styles.topBarButton, activeTab === 1 && styles.activeTopBarButton]}>
        <Text style={[styles.topBarButtonText, activeTab === 1 && styles.activeTopBarButtonText]}>Material</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveTab(2)}
        style={[styles.topBarButton, activeTab === 2 && styles.activeTopBarButton]}
      >
        <Text style={[styles.topBarButtonText, activeTab === 2 && styles.activeTopBarButtonText]}>Lote</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.topBarButton, activeTab === 3 && styles.activeTopBarButton]}>
        <Text style={[styles.topBarButtonText, activeTab === 3 && styles.activeTopBarButtonText]}>Quantidade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.topBarButton, activeTab === 4 && styles.activeTopBarButton]}>
        <Text style={[styles.topBarButtonText, activeTab === 4 && styles.activeTopBarButtonText]}>Avaria</Text>
      </TouchableOpacity>
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
