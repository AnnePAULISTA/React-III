import Header from "../../components/header/header";
import image from "../../assets/sobre-img.svg";
import Footer from "../../components/footer/Footer";
import "./sobre.css";

function Sobre() {
  return (
    <>
    <Header
        image={image}
        description="Ilustração de mulher no notebook"
      >Sobre</Header>
    <div className="sobre">
      <div className="card_sobre">
        <h2>Olá, Eu sou a Anne!</h2>
        <p>
          Tenho 32 anos, sou mãe e casada. Nascida e criada em Niterói/RJ, amo
          praia, calor e crianças. Me apaixonei pela área tech e cá estou!
        </p>
        </div>
        <div>
        <img
          src="./src/assets/foto-eu-perfil.jpeg"
          alt="Foto de perfil Anne Caroline Paulista"
        />
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Sobre;
