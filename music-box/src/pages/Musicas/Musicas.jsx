import api from "../../api";
import styles from "./Musicas.module.css";
import logo from "../../utils/assets/logo.svg";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import CardMusica from "../../components/CardMusica/CardMusica";

const Musicas = () => {
  const [cardsData, setCardsData] = useState([]);
  function recuperarValorDoCard() {
    api
      .get()
      .then((response) => {
        const { data } = response;
        console.log(data);
        setCardsData(data);
      })
      .catch(() => {
        console.log("Deu erro, tente novamente!");
      });
  }

  useEffect(() => {
    recuperarValorDoCard();
  }, []);

  return (
    <>
      <NavBar logoInicio={logo} />
      <div className={styles["content-musicas"]}>
        
            <CardMusica 
                artista={"Metaleiros"}
                genero={"rock"}
            /> 
       
        
        {cardsData.map((item, i) => (
            <CardMusica 
                key={i}
                nomeMusica={item.nomeMusica}
                artista={item.artista}
                genero={item.genero}
                imagemSrc={item.imagem}
                anoLancamento={item.ano}
            />                
        ))}
      </div>
    </>
  );
};
export default Musicas;
