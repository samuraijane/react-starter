import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './about';
import { ContactPage } from './contact';
import { LandingPage } from './landing';
import { PortfolioPage } from './portfolio';

export const Views = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
  </Routes>
);
