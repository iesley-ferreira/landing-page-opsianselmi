import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-wrap pl-4 md:pl-0 justify-center -mx-3 lg:-mx-6">
      <div className="w-full md:w-auto p-3 md:px-6">
        <Link
          className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
          to="/"
          onClick={() => scrollToSection('inicio')}
        >
          Início
        </Link>
      </div>
      <div className="w-full md:w-auto p-3 md:px-6">
        <Link
          className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
          to="/"
          onClick={() => scrollToSection('sobre')}
        >
          Sobre
        </Link>
      </div>
      <div className="w-full md:w-auto p-3 md:px-6">
        <Link
          className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
          to="/"
          onClick={() => scrollToSection('como-funciona')}
        >
          Como Funciona
        </Link>
      </div>

      <div className="w-full md:w-auto p-3 md:px-6">
        <Link
          className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
          to="/"
          onClick={() => scrollToSection('depoimentos')}
        >
          Depoimentos
        </Link>
      </div>
      <div className="w-full md:w-auto p-3 md:px-6">
        <Link
          className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
          to="/"
          onClick={() => scrollToSection('faq')}
        >
          FAQ
        </Link>
      </div>
      <div className="w-full md:w-auto p-3 md:px-6">
        <Link
          className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
          to="/"
          onClick={() => scrollToSection('porque-fazer-terapia')}
        >
          Porque Fazer Terapia
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
