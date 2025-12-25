

import React, { useState } from 'react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const envUser = (import.meta as any).env?.VITE_ADMIN_USERNAME || process.env.ADMIN_USERNAME;
    const envPass = (import.meta as any).env?.VITE_ADMIN_PASSWORD || process.env.ADMIN_PASSWORD;

//    const adminUser = envUser || 'Z';
//    const adminPass = envPass || '1';

    if (username === adminUser && password === adminPass) {
      onLoginSuccess();
    } else {
      setError('Nesprávné přihlašovací jméno nebo heslo.');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Uživatelské jméno</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Heslo</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red">
            Přihlásit se
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;