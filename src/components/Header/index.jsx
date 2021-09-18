import logoImg from "../../assets/pharma-logo.png";
import userImg from '../../assets/user.png';
import { Container, Content, } from './styles';

export function Header() {
   return (
      <Container>
         <Content>
         <img src={logoImg} alt="logo pharma" />
        
         <img src={userImg} alt="user image" />
         </Content>
      </Container>
   )
}