import { useState } from "react";
import PageLogin from "../../components/PageLogin";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return <PageLogin usuario={usuario} setUsuario={setUsuario} senha={senha} setSenha={setSenha} navigation={navigation} />;
}
