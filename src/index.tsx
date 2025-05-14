import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />, // <--- This is where the Todos component is rendered
);
