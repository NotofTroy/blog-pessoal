import './App.css';

import Navbar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import { AuthProvider } from './contextos/AuthContext';
import ListaTemas from './componentes/Temas/listaTemas/ListaTemas';
import FormularioTema from './componentes/Temas/formularioTema/FormularioTema';
import DeletarTema from './componentes/Temas/deletarTema/DeletarTema';
import ListaPostagens from './componentes/Postagens/listaPostagens/ListaPostagens';

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;