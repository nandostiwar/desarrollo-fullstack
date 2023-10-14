import Form from './components/Form.jsx';
import ViewConsulta from './components/viewConsulta.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/formulario' element={<Form />}></Route>
        <Route path='/consulta' element={<ViewConsulta />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
