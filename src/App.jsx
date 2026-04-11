import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          {/* Placeholder routes for nav links */}
          <Route path="/fashion" element={<ComingSoon section="Fashion" />} />
          <Route path="/beauty" element={<ComingSoon section="Beauty" />} />
          <Route path="/culture" element={<ComingSoon section="Culture" />} />
          <Route path="/living" element={<ComingSoon section="Living" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function ComingSoon({ section }) {
  return (
    <div className="max-w-[760px] mx-auto px-6 py-32 text-center">
      <p className="font-sans-ui text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-4">
        Coming Soon
      </p>
      <h1 className="font-editorial text-5xl font-bold uppercase tracking-[0.04em] text-[#111111]">
        {section}
      </h1>
      <div className="h-px bg-[#e0e0e0] w-24 mx-auto my-8" />
      <p className="font-editorial italic text-[#888888] text-lg">
        This section is being curated. Check back soon.
      </p>
    </div>
  );
}

export default App;
