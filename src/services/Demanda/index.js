import Axios from "../../config";
import Helpers from "../../helpers";

const DemandaService = {
  BuscarDemandasEmAberto: async () => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    console.log(dadosUser.id);
    return await Axios.get(`/buscardemandasemabertoporid/${dadosUser.id}`, {
      headers: {
        Authorization: "Bearer " + dadosUser.token,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
  },
  BuscarInfoDeUmaDemanda: async (id) => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    return await Axios.get(`/buscarinfodemanda/${id}`, {
      headers: {
        Authorization: "Bearer " + dadosUser.token,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
  },

  IniciarUmaDemanda: async (id, idConferente, doca) => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    return await Axios.put(
      `/iniciardemanda/${id}`,
      {
        idConferente,
        doca,
      },
      {
        headers: {
          Authorization: "Bearer " + dadosUser.token,
        },
      }
    )
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
  },

  FinalizarDemanda: async (id) => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    return await Axios.put(`/finalizarconferenciafisica/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
  },

  NotaPorDemanda: async (id) => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    return await Axios.get(`/listarnotaspordemanda/${id}`, {
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

export default DemandaService;
