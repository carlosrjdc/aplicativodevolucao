import AsyncStorage from "@react-native-async-storage/async-storage";

const Helpers = {
  gravarAsync: async (nome, info) => {
    await AsyncStorage.setItem(nome, JSON.stringify(info));
  },

  lerAsync: async (nome) => {
    try {
      const dados = await AsyncStorage.getItem(nome);
      const final = dados != null ? JSON.parse(dados) : null;

      return final;
    } catch (erro) {
      console.log(erro);
    }
    return;
  },

  removeAsync: async (nome) => {
    try {
      await AsyncStorage.removeItem(nome);
    } catch (e) {
      // remove error
    }

    console.log("Done.");
  },

  filterAndGetProducts: (arr) => {
    // Filtra o array de objetos com base no atributo e valor fornecidos
    const filteredArray = arr?.filter((filtrar) => filtrar.motivo === null);
    const filtrado = filteredArray.map((obj) => obj.produto);
    const filtrar = arr.filter((filtrar) => !filtrado.includes(filtrar.produto));

    return filtrar;
  },
};

export default Helpers;
