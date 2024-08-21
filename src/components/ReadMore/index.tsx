import React from 'react';
import ArticleCard from './ArticleCard';

const ReadMore: React.FC = () => {
  const articles = [
    {
      title: 'Benefícios da Psicoterapia para Tratamento da Depressão',
      imageUrl: '/assets/blog/effect.jpg',
      link: '#',
    },
    {
      title: 'Como a terapia pode ajudar a lidar com estresse do trabalho',
      imageUrl: '/assets/blog/work2.jpg',
      link: 'https://www.institutocerebro.com.br/noticia/como-a-terapia-pode-ajudar-a-lidar-com-estresse-do-trabalho',
    },
    {
      title: 'O Papel da Psicoterapia na Gestão de Ansiedade',
      imageUrl: '/assets/blog/effect2.jpg',
      link: '#',
    },
    {
      title:
        'Psicoterapia: Como a Psicologia pode te ajudar a ter relacionamentos melhores e mais duradouros?',
      imageUrl: 'public/assets/blog/relacionamento-transformed.jpeg',
      link: 'https://www.acidamente.com.br/relacionamentos-melhores-e-duradouros/#:~:text=A%20terapia%20pode%20ajudar%20a,construir%20relacionamentos%20saud%C3%A1veis%20e%20significativos.',
    },
  ];

  return (
    <section
      className="py-24 bg-white"
      style={{
        backgroundImage: `url('flex-ui-assets/elements/pattern-white.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left top',
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="md:max-w-5xl mx-auto mb-16 text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm">
            Blog
          </span>
          <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
            Nossa missão é tornar o conhecimento e as notícias acessíveis a todos.
          </h3>
          <p className="text-lg md:text-xl text-coolGray-500 font-medium">
            Com nossa abordagem integrada, você pode entender como a psicoterapia pode
            beneficiar sua vida em diversos aspectos.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
          {articles.map((article, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <ArticleCard
                title={article.title}
                imageUrl={article.imageUrl}
                link={article.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
