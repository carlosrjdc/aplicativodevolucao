import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Keyboard, TextInput, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment-timezone";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import InputTexto from "../Global/InputTexto";
import ModaSheetBootom from "../Global/ModaSheetBottom";
import CardConfirmacao from "./CardConfirmacaoConferencia";
import CardProduto from "./CardProduto";
import MaterialService from "../../services/Material";
import IsLoading from "../Global/isLoading";

export default function 
({ route, navigation }) {
  const [material, setMaterial] = useState("");
  const [descMaterial, setDescMaterial] = useState("");
  const [temperatura, setTemperatura] = useState(0);
  const [sif, setSif] = useState("");
  const [lote, setLote] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [avaria, setAvaria] = useState(0);
  const [obs, setObs] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(null);
  const [ver, setVer] = useState(0);
  const [materialLocalizado, setMaterialLocalizado] = useState(null);
  const [show, setShow] = useState(false);

  const objConferencia = {
    material,
    setMaterial,
    temperatura,
    setTemperatura,
    sif,
    setSif,
    lote,
    setLote,
    quantidade,
    setQuantidade,
    avaria,
    setAvaria,
    obs,
    setObs,
    descMaterial,
    setDescMaterial,
  };

  const validacao = () => {
    if (route.params.produto) {
      if (materialLocalizado?.id === route.params.produto) {
        return false;
      } else {
        return false;
      }
    } else {
      false;
    }
  };

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
        setMaterialLocalizado("")
        console.log(erro);
        setShow(false);
        Alert.alert("Não localizado");
      });
  }

  const bottomSheetRef = useRef(null);

  const onOpen = () => {
    Keyboard.dismiss();
    bottomSheetRef.current?.expand();
  };

  const onClose = () => {
    bottomSheetRef.current?.collapse();
  };

  return (
    <View style={styles.container}>
      <IsLoading show={show} />
      <View style={{ marginBottom: 8 }}>
        {route.params.produto && <CardProduto material={route.params.produto} descricao={route.params.descricao} />}
      </View>
      <View style={{ marginBottom: 8, width: "90%" }}>
        {materialLocalizado && !route.params.produto && (
          <CardProduto material={materialLocalizado?.id} descricao={materialLocalizado?.descricao} />
        )}
      </View>
      <Text>PRODUTO:</Text>
      <View style={{ alignItems: "center", width: "90%", flexDirection: "row" }}>
        <InputTexto type="numeric" valor={material} set={setMaterial} />
        <TouchableOpacity onPress={() => buscarMaterial()}>
          <Ionicons name="search-circle-sharp" size={50} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "center" }}>
        <Text>TEMPERATURA:</Text>
        <TextInput
          keyboardType="numeric"
          value={temperatura}
          onChangeText={setTemperatura}
          style={styles.texto}
          label="Temperatura"
          placeholder="Temperatura"
          mode="outlined"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "center" }}>
        <Text>SIF:</Text>
        <TextInput
          keyboardType="numeric"
          value={sif}
          onChangeText={setSif}
          style={styles.texto}
          label="SIF"
          placeholder="SIF"
          mode="outlined"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "center" }}>
        <Text>FABRICAÇÃO:</Text>
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 4 }}>
        <Button title="selecionar" onPress={() => setShowDatePicker(true)} />
        {showDatePicker && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="default"
            onChange={(_, selectedDate) => {
              if (selectedDate !== null) {
                setDate(selectedDate);
                setShowDatePicker(false);
              } else {
                setDate(null);
                setShowDatePicker(false);
              }
            }}
          />
        )}
      </View>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "center" }}>
        <Text>QUANTIDADE:</Text>
        <TextInput
        keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
          style={styles.texto}
          label="Quantidade"
          placeholder="Quantidade"
          mode="outlined"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "center" }}>
        <Text>AVARIA:</Text>
        <TextInput
        keyboardType="numeric"
          value={avaria}
          onChangeText={setAvaria}
          style={styles.texto}
          label="Avaria"
          placeholder="Avaria"
          mode="outlined"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "center" }}>
        <Text>OBS:</Text>
        <TextInput
          value={obs}
          onChangeText={setObs}
          style={styles.texto}
          label="obs"
          placeholder="obs"
          mode="outlined"
        ></TextInput>
      </View>
      <TouchableOpacity
        disabled={
          ((route?.params?.produto !== materialLocalizado?.id && route?.params?.produto) 
          || date === null || quantidade === "" || sif ==="")
           || ((materialLocalizado?.id === "Não localizado!") 
           || (materialLocalizado?.id === undefined ) || date === null || quantidade === "" || sif ==="")}
        
        // || sif === "" || quantidade === "" || date === null
           onPress={() => {
          onOpen();
          setLote(moment(date).format("DD/MM/YYYY"));
        }}
        style={{ alignItems: "center", marginTop: 16 }}
      >
        <Foundation name="next" size={36} color="black" />
      </TouchableOpacity>
      <ModaSheetBootom bottomSheetRef={bottomSheetRef} index={ver}>
        <CardConfirmacao route={route} navigation={navigation} onClose={onClose} objConferencia={objConferencia} />
      </ModaSheetBootom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    marginTop: 8,
    alignContent: "flex-end",
  },
  texto: {
    width: "60%",
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
