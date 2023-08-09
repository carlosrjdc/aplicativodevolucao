import { Text, StyleSheet, View } from "react-native";
import Header from "../../components/Global/Header";
import PageRelacaoDeNotas from "../../components/PageRelacionarNotas";

export default function RelacaoDeNotas({ navigation, route }) {
  const { idDemanda } = route.params;
  return (
    <View style={styles.container}>
      <Header
        acao={() => {
          navigation.goBack();
        }}
        irPerfil={() => {
          navigation.navigate("profile");
        }}
      />
      <PageRelacaoDeNotas idDemanda={idDemanda} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    width: "100%",
    flexDirection: "column",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  informacoes: {
    alignItems: "center",
    marginTop: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 600,
  },
  descricao: {
    fontSize: 18,
  },
});
