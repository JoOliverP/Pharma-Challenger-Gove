import Modal from "react-modal";
import { Container, Content } from "./styles";
import { IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";

import { format, parseISO } from "date-fns";

export function PatientsModal(props) {
  const { isOpen, onRequestClose, patient } = props;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <Container>
        {/* {console.log(patient)} */}
        <IconButton onClick={onRequestClose} className="react-modal-close">
          <Close />
        </IconButton>
        {patient && patient.picture ? (
          <Content>
            <img src={patient.picture.large} alt="Patient image" />

            <h2>{patient.name.first + " " + patient.name.last}</h2>

            <p><span>E-mail </span> : {patient.email}</p>
            <p><span>Gender </span> : {patient.gender}</p>
            <p>
              <span>Date of birth</span> : {format(parseISO(patient.dob.date), "dd/MM/yyyy")}
            </p>
            <p><span>Telephone </span> : {patient.cell}</p>
            <p><span>Nationality </span> : {patient.location.country}</p>
            <p>
              <span>Address</span> : {patient.location.street.name} <span>Nº</span>:{" "}
              {patient.location.street.number}
            </p>
            <p><span>ID</span> : {patient.login.uuid}</p>
          </Content>
        ) : (
          <div></div>
        )}
      </Container>
    </Modal>
  );
}
