import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FundingFinder from './pages/FundingFinder';
import Projects from './pages/Projects';
import Training from './pages/Training';
import Contact from './pages/Contact';

const pages = {
  home: Home,
  about: About,
  services: Services,
  'funding-finder': FundingFinder,
  projects: Projects,
  training: Training,
  contact: Contact,
};

const page = document.body.dataset.page || 'home';
const Page = pages[page] || Home;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
