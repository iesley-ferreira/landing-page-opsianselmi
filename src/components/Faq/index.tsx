import React from 'react';
import WaveBottomLeft from '../WaveBottomLeft';
import WaveTopLeft from '../WaveTopLeft';
import FaqItem from './FaqItem';

const Faq: React.FC = () => {
  return (
    <>
      <WaveTopLeft />
      <section
        id="faq"
        className="py-24 bg-coolGray-900"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-dark2.svg")',
          backgroundPosition: 'center',
        }}
      >
        <div className="container px-4 mb-32 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium rounded-full shadow-sm">
              FAQ
            </span>
            <h2 className="mb-4 text-4xl md:text-5xl leading-tight text-white font-bold tracking-tighter">
              Perguntas Frequentes
            </h2>
            <p className="mb-24 text-lg md:text-xl text-coolGray-400 font-medium">
              Veja abaixo as respostas para as perguntas mais comuns sobre os nossos
              serviços de psicologia clínica e atendimentos online.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqItem
              question="Como funcionam as sessões de psicoterapia online?"
              answer="As sessões de psicoterapia online funcionam de forma similar às presenciais. São realizadas através de videoconferência em uma plataforma segura, onde o paciente e o psicólogo podem interagir em tempo real."
            />
            <FaqItem
              question="Qual a duração de cada sessão?"
              answer="Cada sessão de psicoterapia tem duração média de 50 minutos a 1 hora, dependendo das necessidades do paciente."
            />
            <FaqItem
              question="Como faço para agendar uma sessão?"
              answer="Para agendar uma sessão, você pode entrar em contato através do WhatsApp ou preencher o formulário de contato em nosso site. Entraremos em contato para confirmar o agendamento."
            />
            <FaqItem
              question="O atendimento online é tão eficaz quanto o presencial?"
              answer="Sim, diversos estudos mostram que a psicoterapia online é tão eficaz quanto a presencial para a maioria dos casos. É uma alternativa prática e acessível, especialmente em tempos de pandemia ou para quem tem dificuldade de locomoção."
            />
            <FaqItem
              question="Qual tipo de público eu atendo?"
              answer="Atendo jovens e adultos que buscam apoio para enfrentar desafios emocionais, comportamentais ou relacionados ao estresse e à ansiedade."
            />
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div
            className="relative -mb-40 py-16 px-4 md:px-8 lg:px-16 bg-coolGray-50 rounded-md overflow-hidden"
            style={{
              backgroundImage: 'url("flex-ui-assets/elements/pattern-light1.svg")',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative max-w-max mx-auto text-center">
              <h3 className="mb-2 text-2xl md:text-5xl leading-tight font-bold text-coolGray-900 tracking-tighter">
                Tem mais alguma dúvida?
              </h3>
              <p className="mb-6 max-w-4xl py-10 text-base md:text-xl text-coolGray-400">
                Estou aqui para ajudar. Se precisar de mais informações sobre como a
                psicoterapia pode beneficiar você, não hesite em entrar em contato.
              </p>
              <a
                className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-lg leading-7 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
                href="https://wa.me/message/L4U4DUY7R4VQF1"
              >
                Entre em contato
              </a>
            </div>
          </div>
        </div>
        <div className="h-64 bg-coolGray-800"></div>
      </section>
      <WaveBottomLeft />
    </>
  );
};

export default Faq;
