import Modal from "react-modal";
import { Container } from "./styles";
import { Button, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import userImg from "../../assets/user.png";

export function PatientsModal(props) {
  const { isOpen, onRequestClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <IconButton onClick={onRequestClose} className="react-modal-close">
          <Close />
        </IconButton>
        <img src={userImg} alt="Patient image" />
        <h2>Jonh Doido</h2>

        <p>Email: aaaaaa@gmail.com</p>
        <p>Gênero: Masculino</p>
        <p>Data de nascimento: 20/02/2077</p>
        <p>Telefone : (91) 980551666</p>
        <p>Nacionalidade: Chileno</p>
        <p>Endereço: Rua da bala perdida</p>
        <p>ID : USER1661692614166</p>
        <Button variant="outlined" color="primary" size="large" className="btn-share">
          Share
        </Button>
      </Container>
    </Modal>
  );
}
