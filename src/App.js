import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ContactProvider } from './contexts/ContactContext';

function App() {
  return (
    <>
      <ContactProvider>
        <Routes />
        <GlobalStyle />
      </ContactProvider>
    </>
  );
}

export default App;

// import DevItem from "./components/DevItem";
// import ContactForm from "./components/ContactForm";

// import "./global.css";
// import "./App.css";
// import "./Sidebar.css";
// import "./Main.css";

// function App() {
//   const [contacts, setContacts] = useState([]);
//   const [techs_search, setTechsSearch] = useState("");

//   const [@assetType, setAssetType] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [company, setCompany] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge ] = useState();

//   async function handleAddDev(e) {
//     e.preventDefault();

//     const response = await api.post("/devs", {
//       github_username,
//       techs,
//       goal
//     });

//     console.log(response.data);

//     setGithubUsernme("");
//     setTechs("");
//     setGoal("");

//     setDevs([...devs, response.data]);
//   }

//   async function searchDev() {
//     let techs = techs_search;
//     const response = await api.get("/search", {
//       params: {
//         techs
//       }
//     });

//     console.log(response.data);
//     const numDevsSearching = response.data.devs.length;

//     if (numDevsSearching === 0) {
//       async function loadDevs() {
//         const response = await api.get("/devs");

//         setDevs(response.data);
//       }
//       loadDevs();
//     }

//     setDevs(response.data.devs);
//   }

//   return (
//     <div id="app">
//       <aside>
//         <strong>Cadastrar</strong>
//         <ContactForm/>
//       </aside>

//       <main>
//         <div className="input-search">
//           <input
//             placeholder="Pesquisar desenvolvedor por tecnologia"
//             value={techs_search}
//             onChange={e => setTechsSearch(e.target.value)}
//           />
//           <button onClick={searchDev}>Pesquisar</button>
//         </div>
//         <ul>
//           {devs.map(dev => (
//             <DevItem key={dev._id} dev={dev} />
//           ))}
//         </ul>
//       </main>
//     </div>
//   );
// }

// export default App;
