import React from 'react';

type FilterType = 'all' | 'virtual' | 'presencial';

interface EventFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const EventFilters: React.FC<EventFiltersProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
      <span className="text-gray-700 font-medium">Filtrar por:</span>
      <div className="flex gap-2">
        <button
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeFilter === 'all'
              ? 'bg-gray-700 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onFilterChange('all')}
        >
          Todos
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeFilter === 'virtual'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          }`}
          onClick={() => onFilterChange('virtual')}
        >
          Virtuais
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeFilter === 'presencial'
              ? 'bg-pink-500 text-white shadow-md'
              : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
          }`}
          onClick={() => onFilterChange('presencial')}
        >
          Presenciais
        </button>
      </div>
    </div>
  );
};

export default EventFilters;