import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import InputTexto from "../../Global/InputTexto";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment-timezone";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useState } from "react";

export default function PageConferenciaLote({ objConferencia, setActiveTab }) {
  const { lote, setLote, sif, setSif } = objConferencia;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(null);

  return (
    <View style={styles.container}>
      <Text>SIF</Text>
      <InputTexto type="numeric" valor={sif} set={setSif} />
      <Text>FABRICAÇÃO</Text>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 4 }}>
        <Button title="Editar" onPress={() => setShowDatePicker(true)} />
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

      <Text>{lote}</Text>

      <View
        style={{
          width: "60%",
          marginTop: 56,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => setActiveTab(1)}>
          <AntDesign name="fastbackward" size={34} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={sif.length < 1}
          onPress={() => {
            setLote(moment(date).format("DD/MM/YYYY"));
            setActiveTab(3);
          }}
        >
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
