import React, { useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import WaveBottomLeft from '../WaveBottomLeft';
import WaveTopRight from '../WaveTopRight';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'O. A.',
      role: 'Estudante de Engenharia',
      image: '/assets/testimonials/avatar8.png',
      text: 'A psicoterapia online foi a chave para conciliar minha rotina intensa de estudos com o cuidado da minha saúde mental. A flexibilidade das sessões me permitiu enfrentar a ansiedade e melhorar meu foco, transformando minha vida acadêmica.',
    },
    {
      name: 'L. A',
      role: 'Arquiteta',
      image: '/assets/testimonials/avatar3.png',
      text: 'Com o estresse diário do trabalho, a terapia online me ajudou a encontrar um equilíbrio essencial. A conveniência de poder me conectar de qualquer lugar foi crucial para superar a ansiedade social e melhorar minha produtividade no escritório.',
    },
    {
      name: 'R. M.',
      role: 'Desenvolvedor de Software',
      image: '/assets/testimonials/avatar2.png',
      text: 'A terapia online me proporcionou o suporte necessário para enfrentar os desafios do home office e da solidão. Consegui vencer a depressão e encontrar um equilíbrio entre minha vida profissional e pessoal, tudo isso no conforto do meu lar.',
    },
    {
      name: 'C. B.',
      role: 'Gerente de Projetos',
      image: '/assets/testimonials/avatar4.png',
      text: 'Como gerente de projetos, lidar com pressões constantes fazia parte da rotina. A flexibilidade da terapia online foi essencial para tratar minha ansiedade e melhorar minha gestão de tempo, me tornando uma líder mais equilibrada e eficaz.',
    },
    {
      name: 'M. N.',
      role: 'Advogada',
      image: '/assets/testimonials/avatar5.png',
      text: 'A psicoterapia online foi uma experiência transformadora. Enfrentei desafios no trabalho e na vida pessoal com mais clareza e confiança. A flexibilidade das sessões me permitiu integrar a terapia ao meu dia a dia de maneira fluida e eficaz.',
    },
    {
      name: 'S. R.',
      role: 'Professora',
      image: 'public/assets/testimonials/avatar6.png',
      text: 'A abordagem acolhedora e profissional da terapia online foi fundamental para meu bem-estar. Consegui superar a depressão e melhorar minhas habilidades sociais, o que refletiu positivamente tanto na minha vida pessoal quanto no ambiente de trabalho.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <>
      <WaveTopRight />
      <section className="overflow-hidden py-20 bg-coolGray-900 wave-top wave-bottom">
        <div className="relative container  px-4 mx-auto">
          <div className="xl:max-w-4xl mb-18 md:mb-16 mx-auto text-center">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-50 bg-blue-500 font-medium uppercase rounded-full">
              Inicie Sua Jornada
            </span>
            <h1 className="mb-4 text-3xl md:text-4xl leading-tight text-white font-heading font-bold">
              Resultados Reais, Vidas Transformadas
            </h1>
            <p className="mb-6 text-lg md:text-xl text-coolGray-400 font-heading">
              Nada fala mais alto do que a voz de quem já trilhou o caminho para a
              transformação. Nossos pacientes compartilham suas experiências e o impacto
              positivo que a psicoterapia teve em suas vidas. Leia os depoimentos abaixo e
              descubra como você também pode alcançar uma nova perspectiva, superar
              desafios e encontrar o equilíbrio que merece. Estamos aqui para ajudar você
              a dar o primeiro passo em direção a uma vida mais plena e feliz.
            </p>
          </div>
        </div>
        <div
          className="relative py-4 bg-coolGray-900"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-dark2.svg")',
            backgroundPosition: 'center',
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">
              <div className="w-auto px-4 order-last lg:order-first">
                <button
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-coolGray-50 hover:bg-coolGray-100"
                  onClick={handlePrev}
                >
                  <svg
                    width={12}
                    height={14}
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9999 6H3.4099L6.7099 2.71C6.8982 2.5217 7.00399 2.2663 7.00399 2C7.00399 1.7337 6.8982 1.47831 6.7099 1.29C6.52159 1.1017 6.2662 0.995911 5.9999 0.995911C5.73359 0.995911 5.4782 1.1017 5.2899 1.29L0.289896 6.29C0.198856 6.38511 0.127491 6.49725 0.0798963 6.62C-0.0201217 6.86346 -0.0201217 7.13654 0.0798963 7.38C0.127491 7.50275 0.198856 7.6149 0.289896 7.71L5.2899 12.71C5.38286 12.8037 5.49346 12.8781 5.61532 12.9289C5.73718 12.9797 5.86788 13.0058 5.9999 13.0058C6.13191 13.0058 6.26261 12.9797 6.38447 12.9289C6.50633 12.8781 6.61693 12.8037 6.7099 12.71C6.80363 12.617 6.87802 12.5064 6.92879 12.3846C6.97956 12.2627 7.00569 12.132 7.00569 12C7.00569 11.868 6.97956 11.7373 6.92879 11.6154C6.87802 11.4936 6.80363 11.383 6.7099 11.29L3.4099 8H10.9999C11.2651 8 11.5195 7.89465 11.707 7.70711C11.8945 7.51957 11.9999 7.26522 11.9999 7C11.9999 6.73479 11.8945 6.48043 11.707 6.2929C11.5195 6.10536 11.2651 6 10.9999 6Z"
                      fill="#404F65"
                    />
                  </svg>
                </button>
              </div>

              <TestimonialCard
                name={testimonials[currentIndex].name}
                role={testimonials[currentIndex].role}
                image={testimonials[currentIndex].image}
                text={testimonials[currentIndex].text}
              />
              <div className="w-auto px-4 order-last">
                <button
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-coolGray-50 hover:bg-coolGray-100"
                  onClick={handleNext}
                >
                  <svg
                    width={12}
                    height={14}
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.92 6.62C11.8724 6.49725 11.801 6.38511 11.71 6.29L6.71 1.29C6.61676 1.19676 6.50607 1.1228 6.38425 1.07234C6.26243 1.02188 6.13186 0.995911 6 0.995911C5.7337 0.995911 5.4783 1.1017 5.29 1.29C5.19676 1.38324 5.1228 1.49393 5.07234 1.61575C5.02188 1.73758 4.99591 1.86814 4.99591 2C4.99591 2.2663 5.1017 2.5217 5.29 2.71L8.59 6H1C0.734784 6 0.48043 6.10536 0.292893 6.2929C0.105357 6.48043 0 6.73479 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89465 0.734784 8 1 8H8.59L5.29 11.29C5.19627 11.383 5.12188 11.4936 5.07111 11.6154C5.02034 11.7373 4.9942 11.868 4.9942 12C4.9942 12.132 5.02034 12.2627 5.07111 12.3846C5.12188 12.5064 5.19627 12.617 5.29 12.71C5.38296 12.8037 5.49356 12.8781 5.61542 12.9289C5.73728 12.9797 5.86799 13.0058 6 13.0058C6.13201 13.0058 6.26272 12.9797 6.38458 12.9289C6.50644 12.8781 6.61704 12.8037 6.71 12.71L11.71 7.71C11.801 7.6149 11.8724 7.50275 11.92 7.38C12.02 7.13654 12.02 6.86346 11.92 6.62Z"
                      fill="#404F65"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-fit mx-auto md:w-full pb-10 pt-16">
            <a
              className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
              href="#"
            >
              Agendar consulta
            </a>
          </div>
        </div>
      </section>
      <WaveBottomLeft />
    </>
  );
};

export default Testimonials;
