import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between p-6 px-4">
      <div className="flex justify-between items-center w-full">
        <div className="w-1/2 xl:w-1/3">
          <a className="flex flex-row items-center justify-center max-w-max" href="#">
            <img
              className="h-16"
              src="public/flex-ui-assets/logos/brain-logo.svg"
              alt="Logo"
            />
            <span className="ml-4 text-3xl font-bold text-slate-100">
              Terapia Clínica
            </span>
          </a>
        </div>
        <div className="w-1/2 xl:w-full">
          <ul className="hidden xl:flex xl:justify-center">
            <li className="mr-12">
              <a
                className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                href="#"
              >
                Sobre
              </a>
            </li>
            <li className="mr-12">
              <a
                className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                href="#"
              >
                Funcionamento
              </a>
            </li>
            <li className="mr-12">
              <a
                className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                href="#"
              >
                Terapia Online
              </a>
            </li>
            <li className="mr-12">
              <a
                className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                href="#"
              >
                Depoimentos
              </a>
            </li>
            <li className="mr-12">
              <a
                className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                className="text-coolGray-400 hover:text-coolGray-50 font-medium"
                href="#"
              >
                Porque Fazer Terapia
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 xl:w-1/3">
          <div className="hidden xl:flex items-center justify-center">
            <a
              className="flex items-center py-3 px-4  leading-5 text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-md"
              href="#"
            >
              <i className="ri-whatsapp-line text-2xl pr-2 md:pr-3"></i>
              <span className=" text-sm font-medium">Marcar uma consulta</span>
            </a>
          </div>
        </div>
      </div>
      <button className="navbar-burger self-center xl:hidden"></button>
    </nav>
  );
};

export default NavBar;
