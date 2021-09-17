import { PatientsProvider } from "./PatientsContext";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";

export function App() {
  
  return (
    <PatientsProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </PatientsProvider>
  );
}


