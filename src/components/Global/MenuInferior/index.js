import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PageConferenciaProduto from "../../PageConferencia/Produto";
import Conferencia from "../../../pages/Conferencia";

const Tab = createBottomTabNavigator();

export default function MenuInferior() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" initialParams={{ produto: null, descricao: null }} component={Conferencia} />
      <Tab.Screen name="Settings" component={PageConferenciaProduto} />
      <Tab.Screen name="opa" component={PageConferenciaProduto} />
    </Tab.Navigator>
  );
}
