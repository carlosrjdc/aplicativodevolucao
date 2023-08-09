import Axios from "../../config";
import Helpers from "../../helpers";

const ConferenciaService = {
  BucarItensParaConferencia: async (id) => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    return await Axios.get(`/itensparaconferencia/${id}`, {
      headers: {
        Authorization: "Bearer " + dadosUser.token,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
  },

  AddProdutoConferencia: async (id, produto, temperatura=0, sif, fabricacao, qtd, qtdAvaria=0, observacao) => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    return await Axios.post(
      `/addprodutoconferencia/${id}`,
      {
        produto: produto,
        quantidade: qtd,
        temperatura: temperatura,
        sif: sif,
        lote: fabricacao,
        quantidadeAvaria: qtdAvaria,
        observacao,
      },
      {
        headers: {
          Authorization: "Bearer " + dadosUser.token,
        },
      }
    )
      .then((response) => {
        return "Registro realizado com sucesso";
      })
      .catch((erro) => "Erro, produto não cadastrado, verique a rede!");
  },

  resultadoConferencia: async (id) => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    return await Axios.get(`/conferencia/resultadoconferencia/${id}`, {
      headers: {
        Authorization: "Bearer " + dadosUser.token,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
  },

  buscarItensConferenciaFisica: async (id) => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    return await Axios.get(`/conferenciafisica/${id}`, {
      headers: {
        Authorization: "Bearer " + dadosUser.token,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
  },

  deletarItemConferencia: async (id) => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    return Axios.delete(`/deletarconferencia/${id}`, {
      headers: {
        Authorization: "Bearer " + dadosUser.token,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
  },

  editarConferenciaFisica: async (id, temperatura, quantidade, quantidadeAvaria, sif, lote, observacao) => {
    const dadosUser = await Helpers.lerAsync("@storage_Key");
    return await Axios.put(
      `/atualizarregistroconferencia/${id}`,
      {
        temperatura,
        quantidade,
        quantidadeAvaria,
        sif,
        lote,
        observacao,
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
};

export default ConferenciaService;
