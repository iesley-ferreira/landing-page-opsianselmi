import React from 'react';
import WaveBottomRight from '../WaveBottomRight';

const Intro: React.FC = () => {
  return (
    <>
      <div
        className="py-10 md:py-24 bg-coolGray-900"
        style={{
          backgroundImage: 'url("public/flex-ui-assets/elements/pattern-dark2.svg")',
          backgroundPosition: 'center',
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-blue-500 uppercase rounded-9xl">
                Terapia Clínica Online
              </span>
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-white font-bold tracking-tight">
                Cuidar de Si Mesmo Nunca Foi Tão Essencial
              </h1>
              <div className="flex flex-col">
                <span className="text-3xl md:text-5xl font-bold text-slate-100">
                  Gustavo Anselmi
                </span>
              </div>
              <p className="mb-8 mt-4 text-lg md:text-xl text-coolGray-400 font-medium">
                Ofereço um espaço online seguro e acolhedor, onde você pode explorar suas
                emoções, superar desafios e construir uma vida mais equilibrada. Vamos
                juntos promover seu bem-estar emocional e transformar sua qualidade de
                vida.
              </p>
              <div className="flex flex-wrap">
                <div className="w-fit md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    className="flex items-center py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
                    href="#"
                  >
                    <i className="ri-whatsapp-line text-2xl pr-2 md:pr-3"></i>
                    Agendar consulta
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <img
                  className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400"
                  src="public/flex-ui-assets/elements/circle3-violet.svg"
                  alt="Decoração"
                />
                <img
                  className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500"
                  src="public/flex-ui-assets/elements/dots2-red.svg"
                  alt="Decoração"
                />
                <img
                  className="relative rounded-7xl"
                  src="public/flex-ui-assets/images/intro/intro.jpeg"
                  alt="Imagem Principal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveBottomRight />
    </>
  );
};

export default Intro;
