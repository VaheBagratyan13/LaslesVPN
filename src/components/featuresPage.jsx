import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import PowerfulPage from './features/powerfulPage';
import SecurityPage from './features/securityPage';
import DeviceFeaturesPage from './features/deviceFeaturesPage';
import AdvancedPage from './features/advancedPage';
import ProtocolsPage from './features/protocolsPage';
import ActionVpnPage from './features/actionVpnPage';
import FootPage from './features/footPage';
const FeaturesPage = () => {
  const [showElements, setShowElements] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
            
      <PowerfulPage />

      <SecurityPage showElements={showElements} />

      <DeviceFeaturesPage showElements={showElements} />

      <AdvancedPage showElements={showElements} />

      <ProtocolsPage showElements={showElements} />

      <ActionVpnPage showElements={showElements} />
      <FootPage showElements={showElements} />
    </div>
  );
};

export default FeaturesPage;
