import "./diario.css";
import Header from "../../components/header/header";
import Projects from "./Projects";
import Footer from "../../components/footer/Footer";
import image from "../../assets/diario.svg";
import ux from "../../assets/UX.jpg";
import htmlCss from "../../assets/HTMLeCSS.gif";
import javascript from "../../assets/javascript.jpg";
import react from "../../assets/react.jpg";

function Diario() {
  return (
    <>
      <Header image={image} description="Ilustração de mulher com diario">
        Diário
      </Header>
      <div className="main">
        <Projects
          subtitle="Ux"
          img={ux}
          text="UX é a abreviação de User Experience, em português, experiência do usuário. Trata-se de uma estratégia que tem como objetivo entregar experiências melhores aos usuários de serviços e produtos digitais ou físicos"
        />

        <Projects
          subtitle="HTML e CSS"
          img={htmlCss}
          text="HTML: linguagem de marcação utilizada para estruturar os elementos da página, como parágrafos, links, títulos, tabelas, imagens e até vídeos. CSS: linguagem de estilos utilizada para definir cores, fontes, tamanhos, posicionamento e qualquer outro valor estético para os elementos da página."
        />

        <Projects
          subtitle="JavaScript"
          img={javascript}
          text="JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc."
        />

        <Projects
          subtitle="React"
          img={react}
          text="O React é uma biblioteca criada para construir telas de forma declarativa. Ou seja: o React cria aplicações web para serem executadas em navegadores, sejam eles para desktop, mobile ou qualquer outro dispositivo."
        />
      </div>
      <Footer />
    </>
  );
}

export default Diario;
