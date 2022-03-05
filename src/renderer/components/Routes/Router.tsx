
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {Nav} from '../Menu/Nav'
import Dashboard from './Dashboard';
import Settings from './Settings';
import Invoices from './Invoices';
import Quotes from './Quotes';
import Customers from './Customers';

function Router() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={true}>
        <Nav/>  
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Settings" element={<Settings/>} />
          <Route path="/Invoices" element={<Invoices/>} />
          <Route path="/Quotes" element={<Quotes/>} />
          <Route path="/Customers" element={<Customers/>} />
        </Routes>

    </AnimatePresence>
  )
}

export default Router