import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InputTexto from "../../Global/InputTexto";
import { Foundation } from "@expo/vector-icons";
import CardProduto from "../CardProduto";
import MaterialService from "../../../services/Material";
import { useState } from "react";
import IsLoading from "../../Global/isLoading";

export default function PageConferenciaProduto({ route, objConferencia, setActiveTab }) {
  const { material, setMaterial, temperatura, setTemperatura, descMaterial, setDescMaterial } = objConferencia;
  const [materialLocalizado, setMaterialLocalizado] = useState(null);
  const [show, setShow] = useState(false);

  async function buscarMaterial() {
    setShow(true);
    MaterialService.BuscarUmMaterial(material)
      .then((response) => {
        if (response === "Não localizado!") {
          Alert.alert(response);
          setMaterialLocalizado("Material Diferente do solicitado");
          setShow(false);
        } else {
          setMaterialLocalizado(response);
          setDescMaterial();
          setShow(false);
        }
      })
      .catch((erro) => {
        console.log(erro);
        false;
      });
  }

  return (
    <View style={styles.container}>
      <IsLoading show={show} />
      <View style={{ marginBottom: 16 }}>
        {route.params.produto && <CardProduto material={route.params.produto} descricao={route.params.descricao} />}
      </View>
      <View style={{ marginBottom: 16, width: "90%" }}>
        {materialLocalizado && !route.params.produto && (
          <CardProduto material={materialLocalizado?.id} descricao={materialLocalizado?.descricao} />
        )}
      </View>
      <Text>PRODUTO</Text>
      <View style={{ alignItems: "center", width: "90%" }}>
        <InputTexto type="numeric" valor={material} set={setMaterial} />
        <TouchableOpacity onPress={buscarMaterial}>
          <Ionicons name="search-circle-sharp" size={50} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 24 }}>
        <Text>TEMPERATURA</Text>
      </View>
      <InputTexto type="numeric" valor={temperatura} set={setTemperatura} />
      <View style={{ alignItems: "center", marginTop: 16 }}></View>
      <View style={{ marginTop: 56, alignItems: "center" }}>
        {route.params.produto && (
          <TouchableOpacity
            onPress={() => {
              if (materialLocalizado?.id !== route.params.produto) {
                Alert.alert("Produto selecionado não corresponde digitado! lembre de apertar a lupa para pesquisar o produto");
              } else {
                setActiveTab(2);
              }
            }}
            disabled={material.length < 1}
          >
            <Foundation name="next" size={44} color="black" />
          </TouchableOpacity>
        )}
        {materialLocalizado && !route.params.produto && (
          <TouchableOpacity onPress={() => setActiveTab(2)}>
            <Foundation name="next" size={44} color="black" />
          </TouchableOpacity>
        )}
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
});
