import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();

// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();
