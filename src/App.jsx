import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import './App.css'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-sand"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-2xl font-display font-bold text-stone"
              >
                Aditi
              </Link>
            </div>
            <div className="flex items-center space-x-1">
              <NavLink to="/" currentPath={location.pathname}>
                Home
              </NavLink>
              <NavLink to="/portfolio" currentPath={location.pathname}>
                Portfolio
              </NavLink>
              <motion.a
                href="mailto:aditi.narania@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-brand-400 to-sage-400 rounded-full hover:opacity-90 transition-opacity"
              >
                Contact
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-sand mt-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-display font-bold text-stone mb-4">Aditi</h3>
              <p className="text-coffee">
                Brand Marketing & Communications Professional specializing in strategic storytelling and AI-driven marketing.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-stone mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-coffee hover:text-brand-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-coffee hover:text-brand-500 transition-colors">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-stone mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="http://www.linkedin.com/in/narania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coffee hover:text-brand-500 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:aditi.narania@gmail.com"
                  className="text-coffee hover:text-brand-500 transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-sand text-center text-coffee">
            <p>© {new Date().getFullYear()} Aditi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, currentPath, children }) {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={`relative px-4 py-2 text-sm font-medium transition-colors ${
        isActive ? 'text-stone' : 'text-coffee hover:text-stone'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-0 bg-sand rounded-full -z-10"
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        />
      )}
    </Link>
  );
}

export default App;
