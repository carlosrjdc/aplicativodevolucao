import Axios from "../../config";
import Helpers from "../../helpers";

const MaterialService = {
  BuscarUmMaterial: async (id) => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    return await Axios.get(`/buscarmaterial/${id}`, {
      headers: {
        Authorization: "Bearer " + dadosUser.token,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
  },
};

export default MaterialService;
