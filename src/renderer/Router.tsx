
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Dashboard from './Dashboard';

function Router() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>

        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Dashboard/>} />
        </Routes>

    </AnimatePresence>
  )
}

export default Router