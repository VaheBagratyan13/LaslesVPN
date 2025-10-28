import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import FootPage from './help/footPage';
import SearchPage from './help/searchPage';
import QuickPage from './help/quickPage';
import WindowsPage from './help/windowsPage';

const HelpPage = () => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <SearchPage showElements={showElements} />

      <QuickPage showElements={showElements} />

      <WindowsPage showElements={showElements} />
      <FootPage showElements={showElements} />
   
    </div>
  );
};

export default HelpPage;
