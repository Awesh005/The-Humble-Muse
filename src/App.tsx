import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FounderStory from './pages/FounderStory';
import Brands from './pages/Brands';
import Contact from './pages/Contact';
import ReportViewer from './pages/ReportViewer';

import ReportsIndex from './pages/ReportsIndex';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/founder-story" element={<FounderStory />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test-reports" element={<ReportsIndex />} />
            <Route path="/test-reports/:filename" element={<ReportViewer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
