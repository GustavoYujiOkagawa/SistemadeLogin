
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => { 
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    

    const handleLogin = async () => {
        if(email && password){
            const isLogged = await auth.signin(email, password);
            if(isLogged){
                navigate('/')
            }else{
                alert("Não deu certo.")
            }
        }
    }

  return (
    <div>
      <h2>Página Fechada</h2>

      <input 
       type="text"
       onChange={e => setEmail(e.target.value)}
       value={email} 
       placeholder="Digite seu e-mail" 
       />

      <input 
      type="password" 
      onChange={e => setPassword(e.target.value)}
      value={password} 
      placeholder="Digite sua senha" 
      />

      <button onClick={handleLogin}>Logar</button>
    </div>
  );
};
