import { View } from "react-native";
import PageEditarConferencia from "../../components/PageEditarConferencia";
import Header from "../../components/Global/Header";

export default function EditarConferencia({ route, navigation }) {
  return (
    <View style={{ marginTop: 32 }}>
      <Header
        acao={() => {
          navigation.goBack();
        }}
        irPerfil={() => {
          navigation.navigate("profile");
        }}
      />
      <PageEditarConferencia navigation={navigation} route={route} />
    </View>
  );
}
