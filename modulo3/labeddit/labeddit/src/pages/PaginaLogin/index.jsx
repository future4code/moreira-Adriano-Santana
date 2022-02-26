import {BASE_URL} from "../../constants/urls";
import { Logo, DivPai, BotaoEnviar, StyleLogin, Cadastro } from "./style";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import useForm from '../../hooks/useForm';


export default function PaginaLogin() {
  const navigate= useNavigate();

  const {form, onChange, clearFields}= useForm({ email: "", password: "" })


  const submitForm = ((e)=>{
    e.preventDefault()
    console.log("Formulário enviado:", form)
    onSubmitLogin()

  })

  const onSubmitLogin = () => {

    const url = `${BASE_URL}/users/login`
    const body = form

    axios.post(url, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Login autorizado")
        clearFields()
        navigate("/feed")

    })
    .catch((error) => {
        alert("Algo está errado, tente novamente!")
        console.log(error.res);

    })
  }
  return (
    <StyleLogin>
      <Logo src="https://i.postimg.cc/XvM3Wf3N/Labeddit-2.png" />
      <DivPai>
        <form
        onSubmit={submitForm}
        >
         <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={onChange}
          required 
          />

         <input
         name="password"
         placeholder="Senha"
         type="password"
         value={form.password}
         onChange={onChange}
         pattern={"\w{8,}"}
          title={"A senha deve conter no mínimo 8 caracteres"} 
         required
         /> 

        <BotaoEnviar type="submit">
          Entrar
        </BotaoEnviar>
        </form>
        <Cadastro>Ainda não tem uma conta?  <Link to = "/pagina_cadastro">Cadastre-se</Link> </Cadastro>

        </DivPai>
    </StyleLogin>
  )
}