import { useState, useEffect } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import Header from "../../components/header/Header";
import image from "../../assets/portifolio.svg";
import axios from "axios";
import Footer from "../../components/footer/Footer";

import "./portfolio.css";

const list = [
  {
    id: 1,
    nome: "Biblioteca Ghibli",
    descricao: "Um site usando API para retornar o catálogo do site Ghibli",
    conteudo: "Feito com html, css e js.",
    imagem: "../src/assets/biblioteca-ghibli-tela.gif",
  },
  {
    id: 2,
    nome: "M de maravilhosa",
    descricao: "Site desenvolvido para contar a história da sua maravilhosa escolhida",
    conteudo: "Feito com html e css.",
    imagem: "../src/assets/M-de-maravilhosa-tela.gif",
  },
  {
    id: 3,
    nome: "Ache seu Digimon",
    descricao:
      "Um site em react para demonstrar e buscar personagens de Digimon",
    conteudo:
      "React e consumos de API.",
    imagem: "../src/assets/Digimon-tela.gif",
  },
  {
    id: 4,
    nome: "List To Do",
    descricao: "Uma aplicação de preenchimento de lista",
    conteudo:
      "Feito com html e css",
    imagem: "../src/assets/listToDo-tela.gif",
  },
];

function Portfolio() {
  const [repos, setRepos] = useState([]);
  const baseURL = "https://api.github.com/users/AnnePAULISTA/repos";

  useEffect(() => {
    axios.get(baseURL).then((response) => setRepos(response.data));
  }, []);

  return (
    <><>
      <Header
        image={image}
        description="Ilustração de mulher segurando caixa de texto"
      >
        Meus Projetos
      </Header>

      <div className="cartao-container">
        {list.map((projeto) => {
          return (
            <div className="cartao" key={projeto.id}>
              <h1>{projeto.nome}</h1>
              <img src={projeto.imagem} alt={"gif do projeto" + projeto.nome} />
              <p>{projeto.descricao}</p>
              <a href={projeto.link} className="enter-repo" target="_blank">
                <BsArrowReturnRight size={16} color="#111" />
              </a>
            </div>
          );
        })}
      </div>
    </><div>
        <h2 className="titulo">Outros Projetos no meu Github:</h2>
        <div className="card-container">
          {repos.map((repo) => {
            return (
              <div className="card" key={repo.id} repo={repo}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} className="enter-repo" target="_blank">
                  <BsArrowReturnRight size={18} color="#686AAC" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
      </>
  )
}
 export default Portfolio;
