import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection'; // adicionado
import CalendarSection from './components/CalendarSection';
import Footer from './components/Footer';
import { events } from './data/events';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <AboutSection /> {/* adicionado */}
      <main className="flex-grow">
        <CalendarSection events={events} />
      </main>
      <Footer />
    </div>
  );
}

export default App;