import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { initAnalytics, trackPageView } from './services/analytics';
import { parseUtmFromUrl, storeUtm } from './utils/utm';
import NotFound from './pages/NotFound';

function App() {
  // Single-page app: no auto-route scrolling

  const AppInit: React.FC = () => {
    useEffect(() => {
      // Analytics
      initAnalytics();
      // UTM capture (first page view)
      const utm = parseUtmFromUrl(window.location.href);
      storeUtm(utm);
    }, []);
    return null;
  };

  const RouteChangeTracker: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
      trackPageView(location.pathname + location.search);
    }, [location]);
    return null;
  };

  return (
    <Router>
      <div className="App font-inter bg-[#0A0A0A] min-h-screen">
  <AppInit />
  <RouteChangeTracker />
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
