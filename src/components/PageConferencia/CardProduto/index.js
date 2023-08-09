import { Text, View, StyleSheet } from "react-native";

export default function CardProduto({ material = null, descricao = null }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, fontWeight: 600 }}>{material}</Text>
      <Text style={{ fontSize: 18, fontWeight: 500, textAlign: "center" }}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 8,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
});
