import { Text, StyleSheet, View, FlatList } from "react-native";
import DemandaService from "../../services/Demanda";
import {} from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import IsLoading from "../Global/isLoading";

export default function PageRelacaoDeNotas({ navigation, idDemanda }) {
  const [relacaoNotas, setRelacaoNotas] = useState([]);
  const [show, setShow] = useState(false);

  async function CarregarNota() {
    setShow(true);
    DemandaService.NotaPorDemanda(idDemanda)
      .then((response) => {
        setRelacaoNotas(response);
        setShow(false);
      })
      .catch((erro) => {
        console.log(erro);
        setShow(false);
      });
  }

  useEffect(() => {
    CarregarNota();
  }, []);

  const Renderizar = ({ dados }) => {
    return (
      <TouchableOpacity>
        <View style={styles.cardGeral}>
          <View style={styles.card}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>{dados?.nota_fiscal}</Text>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>{dados?.status_nf}</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: 600 }}>{dados?.motivodevolucao}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <IsLoading show={show} />
      <FlatList
        scrollEnabled={true}
        data={relacaoNotas}
        renderItem={({ item }) => <Renderizar dados={item} />}
        keyExtractor={(item) => item.id}
      />
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  cardGeral: {
    padding: 16,
    margin: 4,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
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
