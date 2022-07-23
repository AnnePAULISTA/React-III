import Header from "../../components/Header/Header";
import image from "../../assets/contato.svg";
import Footer from "../../components/Footer/Footer";
import { FiSend } from "react-icons/fi";
import "./contato.css";

function Contato() {
  return (
    <>
      <Header
        image={image}
        description="ilustração de uma mulher com alguns itens para contato"
      >
        Contato:
      </Header>

        <form className="inputs-container">
            <input className="inputs" type="text" placeholder="Nome" required />
            <input className="inputs" type="email" placeholder="Email" required />
            <input className="inputs" type="tel" placeholder="Telefone " required />
            <input className="inputs" type="text" placeholder="Assunto" required />
            <input className="textarea" placeholder="Envie sua mensagem" required />
            <button className="submit"><FiSend size={20} /></button>
        </form>

      <Footer />
    </>
  );
}
export default Contato;
