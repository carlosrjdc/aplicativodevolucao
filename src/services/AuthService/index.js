import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from "../../config";
import { useNavigation } from "@react-navigation/native";

const AuthService = {
  Autenticacao: async (usuario, senha) => {
    return await Axios.post(`/autenticar`, {
      usuario,
      senha,
    })
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });
  },
  Deslogar: async () => {
    // remove o valor de autenticação do AsyncStorage
    await AsyncStorage.clear();
  },
};

export default AuthService;
