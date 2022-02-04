import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Error from './pages/Error';
import SearchPage from './pages/SearchPage';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
