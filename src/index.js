import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from "./components/signInPage";
import SignUpPage from "./components/signUpPage";
import PricingPage from "./components/pricingPage";
import AboutPage from "./components/aboutPage";
import HelpPage from "./components/helpPage";
import TestimonialsPage from "./components/testimonialsPage";
import FeaturesPage from "./components/featuresPage";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/pricing" element={<PricingPage />}   />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
