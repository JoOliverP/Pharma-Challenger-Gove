import { useEffect, useState, createContext } from "react";
import { api } from "./services/api";

export const PatientsContext = createContext([]);

export function PatientsProvider(props) {
  const [patients, setPatients] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get(`?page=${page}&results=50`)
      .then((response) => setPatients(response.data.results));
    // console.log(patients)
  }, []);

  async function handleLoadingMore(gender) {
    setLoading(true);
    let response = null;

    if (gender) {
      response = await api.get(`?page=${page + 1}&gender=${gender}&results=50`);
    } else {
      response = await api.get(`?page=${page + 1}&results=50`);
    }
    setPatients([...patients, ...response.data.results]);
    setPage(page + 1);
    setLoading(false);
  }

  async function handleFilterGenderPatient(gender) {
    const response = await api.get(
      `?page=${page}&gender=${gender}&nat=${searchTerm}&results=50`
    );
    setPatients(response.data.results);
  }

  async function handleSearchPatient(searchTerm) {
    const searchTermLower = searchTerm.toLowerCase();
    setSearchTerm(searchTermLower);
    const response = await api.get(
      `?page=${page}&nat=${searchTermLower}&results=50`
    );
    setPatients(response.data.results);
  }

  return (
    <PatientsContext.Provider
      value={{
        patients,
        handleLoadingMore,
        handleFilterGenderPatient,
        handleSearchPatient,
        loading,
      }}
    >
      {props.children}
    </PatientsContext.Provider>
  );
}
