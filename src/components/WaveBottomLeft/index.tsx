import React from 'react';

const WaveBottomLeft: React.FC = () => (
  <div className="wave-bottom w-full text-coolGray-900">
    <svg
      viewBox="0 0 1240 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'rotate(180deg)' }}
    >
      <path
        d="M0 64.5909H349.922C606.664 64.5909 859.771 0 1080 0C1300.23 0 1440 64.5909 1440 64.5909V116H0V64.5909Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

export default WaveBottomLeft;
