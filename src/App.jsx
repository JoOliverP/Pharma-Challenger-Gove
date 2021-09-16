import { PatientsContext } from "./PatientsContext";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <PatientsContext.Provider value={[]}>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </PatientsContext.Provider>
  );
}


