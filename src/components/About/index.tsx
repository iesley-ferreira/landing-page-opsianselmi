import React from 'react';

const About: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <div
        className="relative bg-white overflow-hidden"
        style={{
          backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')",
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-transparent">
          <div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
            <div className="fixed top-0 left-0 bottom-0 w-full max-w-xs bg-white">
              <nav className="relative p-6 h-full overflow-y-auto">
                <div className="flex flex-col justify-between h-full">
                  <a className="inline-block" href="#">
                    <img
                      className="h-8"
                      src="flex-ui-assets/logos/flex-ui-blue.svg"
                      alt="Logo"
                    />
                  </a>
                  <ul className="py-6">
                    <li>
                      <a
                        className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                        href="#"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                        href="#"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                        href="#"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                        href="#"
                      >
                        Resources
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-wrap">
                    <div className="w-full mb-2">
                      <a
                        className="inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium text-center rounded-md"
                        href="#"
                      >
                        Log In
                      </a>
                    </div>
                    <div className="w-full">
                      <a
                        className="inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-blue-500 hover:bg-blue-600 font-medium text-center focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                        href="#"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
              <a className="navbar-close absolute top-5 p-4 right-3" href="#">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z"
                    fill="#556987"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-12 pb-28 md:py-60">
          <div className="flex flex-col md:flex-row container px-4 mx-auto">
            <div className="relative mb-20 md:mb-0 mx-auto md:mr-0 max-w-max">
              <img
                className="absolute z-20 -left-10 lg:-left-18 lg:-top-18 w-28 md:w-auto"
                src="/assets/elements/dots3-blue.svg"
                alt="Decoração"
              />
              <img
                className="absolute z-20 -right-5 -bottom-5 w-38 md:w-auto"
                src="/assets/elements/circle3-yellow.svg"
                alt="Decoração"
              />
              <img
                className="relative z-10 w-full md:w-5/6 mx-auto rounded-7xl"
                src="/assets/about/perfil.png"
                alt="doctor"
              />
            </div>
            <div className="mx-auto text-center max-w-3xl">
              <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-white bg-blue-500 uppercase rounded-9xl">
                Sobre Mim
              </span>
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-5xl leading-tight font-bold tracking-tighter">
                Transformando vidas através do autoconhecimento e da empatia.
              </h1>
              <p className="mb-8 mx-auto text-lg md:text-xl text-coolGray-500 font-medium max-w-3xl">
                Olá, eu sou{' '}
                <span className="text-blue-500 text-2xl font-bold">Gustavo Anselmi</span>,
                psicólogo dedicado a ajudar pessoas a encontrar equilíbrio emocional e
                bem-estar mental. Com anos de experiência em psicoterapia, minha missão é
                proporcionar um espaço seguro e acolhedor onde você possa explorar seus
                sentimentos, enfrentar desafios e descobrir seu verdadeiro potencial.
              </p>
              <p className="mb-8 mx-auto text-lg md:text-xl text-coolGray-500 font-medium max-w-3xl">
                Minha abordagem é centrada no ser humano, integrando técnicas comprovadas
                com uma profunda compreensão das suas necessidades únicas. Acredito que
                cada indivíduo é capaz de crescer e evoluir quando recebe o suporte certo,
                e estou aqui para caminhar ao seu lado nessa jornada.
              </p>
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm"
                    href="#"
                  >
                    Entrar em contato
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-20 md:pb-32 mx-auto -mt-32 md:-mt-72">
        <div className="relative mx-auto max-w-max"></div>
      </div>
    </section>
  );
};

export default About;
