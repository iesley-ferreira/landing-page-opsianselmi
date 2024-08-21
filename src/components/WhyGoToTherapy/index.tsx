export default function WhyGoToTherapy() {
  return (
    <section
      className="py-24 bg-white"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: 'center',
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4 mb-16">
          <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm">
              Por que fazer terapia?
            </span>
            <h2 className="mb-6 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">
              Descubra como a terapia pode transformar sua vida
            </h2>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              A terapia é uma jornada de autoconhecimento e crescimento pessoal. Abaixo
              estão algumas razões pelas quais buscar ajuda profissional pode ser uma das
              melhores decisões para sua saúde mental e emocional.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="relative mx-auto md:mr-0 max-w-max overflow-hidden rounded-7xl">
              <img
                src="flex-ui-assets/images/how-it-works/placeholder-video.png"
                alt="Video placeholder"
              />
              <video
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none"
                poster="flex-ui-assets/images/testimonials/video-frame.jpeg"
                muted
              >
                <source
                  src="https://static.shuffle.dev/files/video-placeholder.mp4"
                  type="video/mp4"
                />
              </video>
              <a
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full"
                href="#"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 11.13L5.50001 3.05C5.34799 2.96223 5.17554 2.91603 5.00001 2.91603C4.82447 2.91603 4.65203 2.96223 4.50001 3.05C4.3474 3.1381 4.22079 3.26497 4.13299 3.41775C4.04518 3.57052 3.99931 3.74379 4.00001 3.92V20.08C3.99931 20.2562 4.04518 20.4295 4.13299 20.5823C4.22079 20.735 4.3474 20.8619 4.50001 20.95C4.65203 21.0378 4.82447 21.084 5.00001 21.084C5.17554 21.084 5.34799 21.0378 5.50001 20.95L19.5 12.87C19.6539 12.7828 19.7819 12.6563 19.871 12.5035C19.96 12.3506 20.007 12.1769 20.007 12C20.007 11.8231 19.96 11.6494 19.871 11.4965C19.7819 11.3437 19.6539 11.2172 19.5 11.13ZM6.00001 18.35V5.65L17 12L6.00001 18.35Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 text-center md:text-left">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue-500 font-semibold rounded-full">
              1
            </div>
            <h3 className="mb-2 text-xl font-bold">Autoconhecimento</h3>
            <p className="font-medium text-coolGray-500">
              A terapia proporciona um espaço seguro para você explorar e entender melhor
              suas emoções, comportamentos e padrões de pensamento.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue-500 font-semibold rounded-full">
              2
            </div>
            <h3 className="mb-2 text-xl font-bold">Redução do Estresse e Ansiedade</h3>
            <p className="font-medium text-coolGray-500">
              Ao identificar as causas do estresse e da ansiedade, você pode desenvolver
              estratégias eficazes para gerenciar esses sentimentos e melhorar sua
              qualidade de vida.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue-500 font-semibold rounded-full">
              3
            </div>
            <h3 className="mb-2 text-xl font-bold">Melhora nos Relacionamentos</h3>
            <p className="font-medium text-coolGray-500">
              Através da terapia, você pode aprender a se comunicar de forma mais eficaz e
              construir relacionamentos mais saudáveis e satisfatórios.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue-500 font-semibold rounded-full">
              4
            </div>
            <h3 className="mb-2 text-xl font-bold">Superação de Traumas</h3>
            <p className="font-medium text-coolGray-500">
              A terapia oferece suporte especializado para processar e superar traumas do
              passado, ajudando você a seguir em frente de forma saudável.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue-500 font-semibold rounded-full">
              5
            </div>
            <h3 className="mb-2 text-xl font-bold">Aprimoramento da Saúde Mental</h3>
            <p className="font-medium text-coolGray-500">
              Manter sua saúde mental em dia é tão importante quanto cuidar da saúde
              física. A terapia é um componente chave para o bem-estar emocional.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue-500 font-semibold rounded-full">
              6
            </div>
            <h3 className="mb-2 text-xl font-bold">Desenvolvimento Pessoal</h3>
            <p className="font-medium text-coolGray-500">
              A terapia não só trata problemas, mas também apoia seu crescimento pessoal,
              ajudando você a alcançar seu potencial máximo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
