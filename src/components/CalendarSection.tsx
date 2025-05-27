import React, { useState } from 'react';
import EventsTable from './EventsTable';
import EventFilters from './EventFilters';
import { Event } from '../types';

interface CalendarSectionProps {
  events: Event[];
}

type FilterType = 'all' | 'virtual' | 'presencial';

const EVENTS_PER_PAGE = 5;

const CalendarSection: React.FC<CalendarSectionProps> = ({ events }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEvents = events.filter((event) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'virtual') return event.format === 'Virtual';
    if (activeFilter === 'presencial') return event.format === 'Presencial';
    return true;
  });

  // Paginação
  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  // Resetar para página 1 ao trocar o filtro
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Calendário de Encontros – Projeto Florescer
        </h2>
        
        <EventFilters 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />
        
        <EventsTable events={paginatedEvents} />

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            <button
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Próxima
            </button>
          </div>
        )}

        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            * Os encontros presenciais ocorrem no endereço: Praça Victor Konder, 01 - Centro, Blumenau - SC.
          </p>
          <p className="text-sm mt-1">
            * Os links para encontros virtuais são enviados no grupo de{' '}
            <a
              href="https://chat.whatsapp.com/DOSt0ydms6o5hTAceyBXBa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 font-semibold"
            >
              WhatsApp
            </a>{' '}
            do projeto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;