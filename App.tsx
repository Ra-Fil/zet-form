
import React, { useState, useEffect } from 'react';
import CustomerFormPage from './CustomerFormPage';
import AdminPage from './AdminPage';
import PriceListPage from './PriceListPage';

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('locationchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, []);

  switch (path) {
    case '/admin':
      return <AdminPage />;
    case '/cenik':
      return <PriceListPage />;
    default:
      return <CustomerFormPage />;
  }
};

export default App;