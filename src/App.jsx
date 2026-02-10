import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import Doacao from './pages/doação/Doacao';
import Voluntariado from './pages/voluntariado/Voluntariado';
import Mentoria from './pages/mentoria/Mentoria';
import EventosEP from './pages/eventosEP/EventosEP';
import Perfil from './pages/perfil/Perfil';
import './globalStyles.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doação" element={<Doacao />} />
        <Route path="/voluntariado" element={<Voluntariado />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/eventosEP" element={<EventosEP />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
