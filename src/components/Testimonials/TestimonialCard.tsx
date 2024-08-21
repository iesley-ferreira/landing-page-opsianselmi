import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, image, text }) => (
  <div className="flex flex-col w-full lg:flex-row lg:w-5/6 px-12 mb-12 lg:mb-0">
    <div className="flex mb-6 lg:mb-0 lg:w-5/6 items-center">
      <img
        className="w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full"
        src={image}
        alt={name}
      />
      <div>
        <h3 className="mb-2 text-xl md:text-2xl text-coolGray-100 font-semibold">
          {name}
        </h3>
        <span className="text-lg text-coolGray-300 font-medium">{role}</span>
      </div>
    </div>
    <div className="relative pt-12 pb-6 sm:p-6">
      <img
        className="absolute top-0 left-0"
        src="flex-ui-assets/elements/testimonials/quote-top-blue.svg"
        alt="quote"
      />
      <img
        className="absolute bottom-0 right-0"
        src="flex-ui-assets/elements/testimonials/quote-down-blue.svg"
        alt="quote"
      />
      <div className="relative max-w-[1480px]">
        <h2 className="text-2xl font-semibold text-slate-200 tracking-tighter">{text}</h2>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
