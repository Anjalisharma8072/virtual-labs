import React from 'react';
import LabsList from './components/LabsList';
import HiringServices from './components/HiringServices';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <LabsList />
        <HiringServices />
      </main>
    </div>
  );
};

export default App;