import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Private } from './Pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {

  const auth = useContext(AuthContext);

  const handleLogout = async() =>{
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/private'>Página private</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>

      <hr/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>} />
      </Routes>
     
    </div>
  );
}

export default App;
