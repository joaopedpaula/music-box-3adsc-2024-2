import api from "../../api";
import React, { useEffect, useState } from "react";
import styles from "./Adicionar.module.css";
import logo from "../../utils/assets/logo.svg";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import imgCantor from "../../utils/assets/pessoa-ouvindo-disco.svg";
import { toast } from "react-toastify";

import { mascaraCPF } from "../../utils/globals";

function Adicionar() {
  const navigate = useNavigate();

  const [ano, setAno] = useState("");
  const [genero, setGenero] = useState("");
  const [imagem, setImagem] = useState("");
  const [artista, setArtista] = useState("");
  const [nomeMusica, setNomeMusica] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSave = () => {
    const cpf_sem_especiais = cpf.replaceAll(/[^\d]/g, "");

    const objetoAdicionado = {
      nomeMusica,
      artista,
      genero,
      ano,
      imagem,
    };

    console.log("Objeto: ", objetoAdicionado);
    console.log("cpf: ", cpf_sem_especiais);

    api
      .post(`/`, objetoAdicionado)
      .then(() => {
        toast.success("Novo Card criado com sucesso!");
        sessionStorage.setItem("editado", JSON.stringify(objetoAdicionado));
        navigate("/musicas");
      })
      .catch(() => {
        toast.error(
          "Ocorreu um erro ao salvar os dados, por favor, tente novamente."
        );
      });
  };

  const handleInputChange = (event, setStateFunction) => {
    console.log("event", event);
    setStateFunction(event.target.value);
  };

  const handleBack = () => {
    navigate("/musicas");
  };

  return (
    <>
      <NavBar logoInicio={logo} />
      <div className={styles["container-adicionar"]}>
        <div className={styles["secao-esquerda-adicionar"]}>
          <form>
            <h1>Adicionar</h1>
            <input
              type="text"
              value={nomeMusica}
              placeholder="Nome da música"
              onChange={(e) => handleInputChange(e, setNomeMusica)}
            />
            <input
              type="text"
              value={artista}
              placeholder="Artista"
              onChange={(e) => handleInputChange(e, setArtista)}
            />
            <input
              type="text"
              value={genero}
              placeholder="Genero"
              onChange={(e) => handleInputChange(e, setGenero)}
            />
            <input
              type="text"
              value={ano}
              placeholder="Ano de Lançamento"
              onChange={(e) => handleInputChange(e, setAno)}
            />
            <input
              type="text"
              value={imagem}
              placeholder="URL da Imagem"
              onChange={(e) => handleInputChange(e, setImagem)}
            />
            <div className={styles["buttons-container"]}>
              <button type="button" onClick={handleSave}>
                Salvar
              </button>
              <button type="button" onClick={handleBack}>
                Cancelar
              </button>
            </div>

            <div>
              <h3>EXTRA - MÁSCARA CPF: {cpf || "N/A"}</h3>
              <input
                type="text"
                value={cpf}
                placeholder="CPF"
                onInput={mascaraCPF}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className={styles["secao-direita-adicionar"]}>
          <img
            src={imgCantor}
            alt="Imagem de uma pessoa
ouvindo música"
          />
        </div>
      </div>
    </>
  );
}
export default Adicionar;
