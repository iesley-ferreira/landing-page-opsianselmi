import React from 'react';

const NavbarMenu: React.FC = () => (
  <div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
    <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-coolGray-900">
      <nav className="relative p-6 h-full overflow-y-auto">
        <div className="flex flex-col justify-between h-full">
          <a className="inline-block" href="#">
            <img className="h-8" src="flex-ui-assets/logos/flex-ui-blue.svg" alt="Logo" />
          </a>
          <ul className="py-6">
            <li>
              <a
                className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md"
                href="#"
              >
                Produto
              </a>
            </li>
            <li>
              <a
                className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md"
                href="#"
              >
                Funcionalidades
              </a>
            </li>
            <li>
              <a
                className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md"
                href="#"
              >
                Preços
              </a>
            </li>
            <li>
              <a
                className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md"
                href="#"
              >
                Recursos
              </a>
            </li>
          </ul>
          <div className="flex flex-wrap">
            <div className="w-full mb-2">
              <a
                className="inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-400 hover:text-white bg-transparent font-medium text-center rounded-md"
                href="#"
              >
                Entrar
              </a>
            </div>
            <div className="w-full">
              <a
                className="inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-blue-500 hover:bg-blue-600 font-medium text-center focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                href="#"
              >
                Cadastrar-se
              </a>
            </div>
          </div>
        </div>
      </nav>
      <a className="navbar-close absolute top-5 p-4 right-3" href="#"></a>
    </div>
  </div>
);

export default NavbarMenu;
