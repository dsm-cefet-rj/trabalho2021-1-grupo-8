// import "./imoveis.css";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./components/Cadastro/cadastro.css";
import { useEffect } from "react";
import { projetoSchema } from "./ProjetoSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function Cadastro(filteredStore) {
  const [values, setValues] = useState({});
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projetoSchema),
  });

  function onChange(event) {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }
  function resize() {
    window.location.reload();
  }
  function onSubmit(event) {
    axios.post("http://localhost:5000/users/signup", values).then((response) => {
      history.push("/imoveis");
      resize();
    });
  }

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   axios("http://localhost:5000/login")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  // const initialState = JSON.stringify(data, null, 2);
  // if (loading) return "Loading...";
  // if (error) return "Error!";

  return (
    <div>
      <div className="cad">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="username">
            <label>email</label>
            <input id="username" name="username" onChange={onChange} {...register("username")} />
            <span className="error-messaage">{errors.username?.message}</span>
          </div>
          <div className="password">
            <label>senha</label>
            <input id="password" name="password" onChange={onChange} {...register("password")} />
            <span className="error-messaage">{errors.password?.message}</span>
          </div>
          {/* <div className="password">
            <label>password</label>
            <input name="password" onChange={onChange} {...register("password")} />
            <span className="error-messaage">{errors.password?.message}</span>
          </div> */}
          <div className="botaoCad">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
