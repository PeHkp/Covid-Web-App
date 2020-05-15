import React from "react";

import "./style.css";

import Imagem from "../../assets/icons/coronadr.svg";
import Tosse from "../../assets/image/caugh.png";
import Febre from "../../assets/image/fever.png";
import DorCabeca from "../../assets/image/headache.png";
import Mascara from "../../assets/image/wear_mask.png";
import LavarMao from "../../assets/image/wash_hands.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Sistomas() {
  return (
    <div>
      <div className="all">
        <Header></Header>
        <div className="header">
          <div className="imagemDivSintomas">
            <img src={Imagem} alt="" srcset="" />
          </div>
          <div className="textoDiv">
            <h1>Saiba Mais</h1>
            <h1>Sobre Covid-19!</h1>
          </div>
        </div>
      </div>
      <div className="title">
        <h1>Principais Sintomas</h1>
        <p>Alguns sintomas que podem identificar a infecção</p>
      </div>

      <div className="sintomas">
        <div className="sintomasUm">
          <img src={Tosse} alt="Tosse" srcset="" />
          <p>Tosse</p>
        </div>
        <div className="sintomasUm">
          <img src={Febre} alt="Febre" srcset="" />
          <p>Febre</p>
        </div>
        <div className="sintomasUm">
          <img src={DorCabeca} alt="Dor de Cabeca" srcset="" />
          <p>Dor de Cabeça</p>
        </div>
      </div>
      <div className="title">
        <h1>Prevenção</h1>
        <p>Atitudes que você pode tomar</p>
      </div>
      <div className="prevencoes">
        <img src={Mascara} alt="" />
        <div className="textosMascara">
          <h1>Usar máscaras protetoras</h1>
          <p>
            O recomendado pelos especialistas é que, se necessário, as máscaras
            utilizadas sejam do tipo de proteção respiratória individual,
            compostas por uma peça facial e um dispositivo de filtragem de ar
            que garantem uma vida útil mais longa à peça....
          </p>
          
        </div>
      </div>
      <div className="prevencoes">
        <img src={LavarMao} alt="" />
        <div className="textosMascara">
          <h1>Lavar as Maos</h1>
          <p>
            Lavar as mãos é o ato reconhecido pela OMS (Organização Mundial da
            Saúde) como um dos principais ações contra epidemias. Dados
            mostram que o hábito pode reduzir em até 40% a contaminação por
            vírus e bactérias que causam doenças como gripes, resfriados,
            conjuntivites e viroses.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Sistomas;
