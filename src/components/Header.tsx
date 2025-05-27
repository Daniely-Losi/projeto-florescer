import React from 'react';
import { Flower } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-pink-100 to-blue-100 py-6 px-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Flower className="h-8 w-8 text-pink-500 mr-3" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Projeto Florescer
            </h1>
          </div>
          <p className="text-gray-600 italic text-center md:text-right">
            Um espaço de partilha e fortalecimento para mulheres
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;