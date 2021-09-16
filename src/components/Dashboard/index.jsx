import { PatientsTable } from "../PatientsTable";
import { SearchingInput } from "../SearchingInput";
import { Container } from "./styles";

export function Dashboard() {
   return (
      <Container>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim ac massa vel tempus. Donec ante libero, fermentum eu luctus a, convallis sed magna. Aenean porta fringilla nulla nec laoreet. Ut et sollicitudin neque. Ut auctor et nulla eu egestas.</p>
         <SearchingInput />
         <PatientsTable />
      </Container>
   )
}