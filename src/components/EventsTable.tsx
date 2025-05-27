import React from 'react';
import { Event } from '../types';
import { formatDate, getDayOfWeek, formatTime } from '../utils/dateUtils';

interface EventsTableProps {
  events: Event[];
}

const EventsTable: React.FC<EventsTableProps> = ({ events }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Data
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dia da Semana
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Horário
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Formato
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {events.length > 0 ? (
            events.map((event) => (
              <tr 
                key={event.id} 
                className={`transition-colors duration-200 hover:bg-gray-50 ${
                  event.format === 'Virtual' 
                    ? 'hover:bg-blue-50' 
                    : 'hover:bg-pink-50'
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {event.date.split('-').reverse().join('/')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getDayOfWeek(event.date)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatTime(event.time)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
                      event.format === 'Virtual'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-pink-100 text-pink-800'
                    }`}
                  >
                    {event.format}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                Nenhum encontro encontrado com os filtros atuais.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;