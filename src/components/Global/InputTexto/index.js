import { TextInput, StyleSheet } from "react-native";

export default function InputTexto({ placeholder, valor, set, type, senha, multline = false, altura = 50 }) {
  //validar se recebemos os dados

  return (
    <TextInput
      secureTextEntry={senha}
      keyboardType={type ? type : "default"}
      label={placeholder}
      placeholder={placeholder}
      mode="outlined"
      style={{ ...styles.texto, height: altura }}
      value={valor}
      onChangeText={(text) => set(text)}
      multiline={multline}
    />
  );
}

const styles = StyleSheet.create({
  texto: {
    width: "90%",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    fontSize: 16,
    margin: 8,
    backgroundColor: "rgba(190, 201, 198, 0.21)",
    borderRadius: 5,
    borderBottomColor: "rgba(167, 174, 185, 0.831)",
  },
});
