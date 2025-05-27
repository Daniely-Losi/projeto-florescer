import React from 'react';
import { Heart, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold flex items-center">
              Projeto Florescer <Heart className="h-4 w-4 ml-2 text-pink-400" />
            </h3>
            <p className="mt-2 text-gray-300 max-w-md">
              Criando espaços seguros para mulheres florescerem em comunidade desde 2024.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <Mail className="h-4 w-4 mr-2 text-blue-300" />
              <a href="mailto:blumenau.juizadocriminal@tjsc.jus.br" className="text-gray-300 hover:text-white transition-colors">
                blumenau.juizadocriminal@tjsc.jus.br
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaWhatsapp className="h-4 w-4 mr-2 text-green-400" />
              <a
                href="https://chat.whatsapp.com/DOSt0ydms6o5hTAceyBXBa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaInstagram className="h-4 w-4 mr-2 text-pink-400" />
              <a
                href="https://www.instagram.com/projetoflorescer_mulher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-pink-300" />
              <span className="text-gray-300">Blumenau, SC - Brasil</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Projeto Florescer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;