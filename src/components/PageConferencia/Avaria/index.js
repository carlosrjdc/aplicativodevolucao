import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import InputTexto from "../../Global/InputTexto";
import { useRef, useState } from "react";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ModaSheetBootom from "../../Global/ModaSheetBottom";

export default function PageConferenciaAvaria({ objConferencia, setActiveTab, onOpen }) {
  const { avaria, setAvaria, obs, setObs } = objConferencia;
  const [ver, setVer] = useState(0);

  return (
    <View style={styles.container}>
      <Text>QUANTIDADE AVARIADA</Text>
      <InputTexto type="numeric" valor={avaria} set={setAvaria} />
      <Text>OBSERVAÇÃO</Text>
      <InputTexto multline={true} valor={obs} set={setObs} altura={100} />
      <View
        style={{
          width: "70%",
          marginTop: 56,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => setActiveTab(3)}>
          <AntDesign name="fastbackward" size={34} color="black" />
        </TouchableOpacity>
        <TouchableOpacity disabled={avaria.length < 1} onPress={() => onOpen()}>
          <AntDesign name="checkcircle" size={34} color="green" />
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
