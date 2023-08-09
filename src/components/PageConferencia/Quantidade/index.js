import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
import InputTexto from "../../Global/InputTexto";
import { AntDesign } from "@expo/vector-icons";

export default function PageConferenciaQuantidade({ objConferencia, setActiveTab }) {
  const { quantidade, setQuantidade } = objConferencia;
  return (
    <View style={styles.container}>
      <Text>QUANTIDADE</Text>
      <InputTexto type="numeric" valor={quantidade} set={setQuantidade} />
      <View
        style={{
          width: "70%",
          marginTop: 56,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => setActiveTab(2)}>
          <AntDesign name="fastbackward" size={34} color="black" />
        </TouchableOpacity>
        <TouchableOpacity disabled={quantidade.length < 1} onPress={() => setActiveTab(4)}>
          <Foundation name="next" size={44} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    alignItems: "center",
  },
  card: {
    marginTop: 16,
    alignItems: "center",
    backgroundColor: "#E1D6D6",
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  textCardTitulo: {
    fontSize: 32,
    fontWeight: 600,
  },
  textCardDescricao: {
    fontSize: 16,
  },
  icone: {
    marginTop: 30,
  },
});
