import { useEffect,useState ,createContext } from "react";
import { api } from "./services/api";

export const PatientsContext = createContext([]);


export function PatientsProvider (props) {
   const [patients,setPatients] = useState([]); 
   const [page,setPage] = useState(1);

  useEffect(()=> {
     api.get(`?page=${page}&results=50`)
         .then(response => setPatients(response.data.results))
         // console.log(patients)
  },[]);

   async function handleLoadingMore() {
     const response = await api.get(`?page=${page + 1}&results=50`);

     setPatients([...patients, ...response.data.results]);

     setPage(page + 1);
   }

   // async function handleFilterGenderPatient(gender) {
   //    await api.get(`?page=${page}&gender=${gender}&results=50`);
   // }

  return (
    <PatientsContext.Provider value={{ patients, handleLoadingMore }}>
      {props.children}
    </PatientsContext.Provider>
  );
}