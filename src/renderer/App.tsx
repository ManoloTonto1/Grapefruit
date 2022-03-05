import { MemoryRouter as Route } from 'react-router-dom';
import './Styles/App.css';
import Router from './components/Routes/Router';



export default function App() {
  return (
    <Route>
    <Router/>
    </Route>
  );
}
