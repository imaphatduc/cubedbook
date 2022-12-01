import ReactDOM from 'react-dom/client';
import App from './App';
import { CubedProvider } from './contexts/CubedContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CubedProvider>
    <App />
  </CubedProvider>
);
