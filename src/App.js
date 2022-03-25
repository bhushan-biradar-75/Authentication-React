import './App.css';
import Head from './Component/Head';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Page from './Component/Page';


function App() {
  return (
    <BrowserRouter>
    <Head/>
    <Routes>
    {/* <Route path="/" element={<Head/>}/> */}
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>  
    <Route path  = "/user" element={<Page/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
