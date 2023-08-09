import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login";
import StartDemanda from "./src/pages/StartDemanda";
import Conferencia from "./src/pages/Conferencia";
import "react-native-gesture-handler";
import RelacaoDeNotas from "./src/pages/RelacaoNotas";
import FinalizarConferencia from "./src/pages/FinalizarConferencia";
import Profile from "./src/pages/Profile";
import ListaItensConferencia from "./src/pages/ListaItensConferencia";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import EditarConferencia from "./src/pages/EditarConferencia";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="StartDemanda" component={StartDemanda} />
          <Stack.Screen
            options={{ headerShown: false }}
            initialParams={{ pesquisa: "" }}
            name="listaConferencia"
            component={ListaItensConferencia}
          />
          <Stack.Screen options={{ headerShown: false }} name="Conferencia" component={Conferencia} />
          <Stack.Screen
            options={{ headerShown: false }}
            initialParams={{ produto: null, idDemanda: null }}
            name="relacaoNotas"
            component={RelacaoDeNotas}
          />
          <Stack.Screen options={{ headerShown: false }} name="finalizarConferencia" component={FinalizarConferencia} />
          <Stack.Screen options={{ headerShown: false }} name="profile" component={Profile} />
          <Stack.Screen options={{ headerShown: false }} name="editarconferencia" component={EditarConferencia} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
