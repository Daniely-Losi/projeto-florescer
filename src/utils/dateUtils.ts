// Format date to display as DD/MM/YYYY
export const formatDate = (dateString: string): string => {
  // Corrigido: não usar new Date(dateString), pois interpreta como UTC e pode mudar o dia
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};

// Get day of the week in Portuguese
export const getDayOfWeek = (dateString: string): string => {
  // Corrigido: criar Date no fuso local
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day); // mês começa do zero
  const days = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ];
  return days[date.getDay()];
};

// Format time to display as HH:MM
export const formatTime = (timeString: string): string => {
  return timeString + 'h';
};