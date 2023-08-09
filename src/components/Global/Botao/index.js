import { Text } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function Botao({ acao = () => {}, label, habilitar = false }) {
  return (
    <TouchableOpacity disabled={habilitar} onPress={acao} style={styles.botao}>
      <Text style={styles.texto}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3564aaba",
    borderRadius: 5,
    margin: 8,
    alignItems: "center",
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
