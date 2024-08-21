import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blog/:id" element={<Blog />} /> */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
