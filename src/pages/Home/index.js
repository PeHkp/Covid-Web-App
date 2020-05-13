import React, { useState, useEffect } from "react";

import "./style.css";

import api from "../../services/api";
import Imagem from "../../assets/icons/Drcorona.svg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  const [post, setPost] = useState([]);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  var teste = "Brasil";

  useEffect(() => {
    api.get(teste).then((response) => {
      setPost(response.data);
    });
  });

  useEffect(() => {
    api.get(teste).then((response) => {
      setData(
        response.data.detalhes_por_dia[
          response.data.detalhes_por_dia.length - 1
        ]
      );
    });
  });
  useEffect(() => {
    api.get(teste).then((response) => {
      setData2(
        response.data.detalhes_por_dia[
          response.data.detalhes_por_dia.length - 2
        ]
      );
    });
  });
  useEffect(() => {
    api.get(teste).then((response) => {
      setData3(
        response.data.detalhes_por_dia[
          response.data.detalhes_por_dia.length - 3
        ]
      );
    });
  });

  return (
    <div>
      <div className="all">
        <Header></Header>
        <div className="header">
          <div className="imagemDiv">
            <img src={Imagem} alt="" srcset="" />
          </div>
          <div className="textoDiv">
            <h1>Tudo que voce precisa</h1>
            <h1>e ficar em casa.</h1>
          </div>
        </div>
      </div>
      <div className="cases">
        <div className="casesCima">
          <h1>Casos Registrados</h1>
          <p>Atualizado Agora</p>
        </div>
        <div className="Estatisticas">
          <div className="infected">
            <div className="bolaFora">
              <div className="boladentro"></div>
            </div>
            <h1>{post.total_casos}</h1>
            <p>Infectador</p>
          </div>
          <div className="infected dead">
            <div className="bolaForaRed">
              <div className="boladentroRed"></div>
            </div>
            <h1>{post.total_mortes}</h1>
            <p>Mortes</p>
          </div>
        </div>
      </div>
      <div className="cases">
        <div className="casesCima">
          <h1>Casos Por Dia</h1>
          <p>Atualizado Agora</p>
        </div>
        <div className="organizaDia">
          <div className="EstatisticasDia">
            <div className="infected">
              <p>Data</p>
              <p className="dataDia">{data.date}</p>
              <div className="bolaFora">
                <div className="boladentro"></div>
              </div>
              <h1>{data.new_cases}</h1>
              <p>Infectador</p>
            </div>
            <div className="infected dead">
              <div className="bolaForaRed">
                <div className="boladentroRed"></div>
              </div>
              <h1>{data.new_deaths}</h1>
              <p>Mortes</p>
            </div>
          </div>

          <div className="EstatisticasDia">
            <div className="infected">
              <p>Data</p>
              <p className="dataDia">{data2.date}</p>
              <div className="bolaFora">
                <div className="boladentro"></div>
              </div>
              <h1>{data2.new_cases}</h1>
              <p>Infectador</p>
            </div>
            <div className="infected dead">
              <div className="bolaForaRed">
                <div className="boladentroRed"></div>
              </div>
              <h1>{data2.new_deaths}</h1>
              <p>Mortes</p>
            </div>
          </div>
          <div className="EstatisticasDia">
            <div className="infected">
              <p>Data</p>
              <p className="dataDia">{data3.date}</p>
              <div className="bolaFora">
                <div className="boladentro"></div>
              </div>
              <h1>{data3.new_cases}</h1>
              <p>Infectador</p>
            </div>
            <div className="infected dead">
              <div className="bolaForaRed">
                <div className="boladentroRed"></div>
              </div>
              <h1>{data3.new_deaths}</h1>
              <p>Mortes</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
