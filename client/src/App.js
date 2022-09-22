import styled from 'styled-components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Dashboard, Register, Landing, Error } from "./pages";

const Button = styled.button`
background: red;
color: white;
font-size:1rem; 
`

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/landing" element={<Landing />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
