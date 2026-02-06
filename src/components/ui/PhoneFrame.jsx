import React from 'react';

const PhoneFrame = ({ screenshots }) => (
  <div className="relative flex items-center justify-center">
    <div
      className="relative rounded-[2.2rem] border-[3px] overflow-hidden shadow-lg"
      style={{
        borderColor: '#1a1a2e',
        width: '204px',
        height: '408px',
        background: '#fff'
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 rounded-b-xl z-10"
        style={{ background: '#1a1a2e' }}
      />
      <img
        src={screenshots[0]}
        alt="Écran de l'application mobile"
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
    {screenshots.length > 1 && (
      <div
        className="absolute -right-4 -bottom-4 rounded-[2.2rem] border-[3px] overflow-hidden shadow-md opacity-50"
        style={{
          borderColor: '#1a1a2e',
          width: '180px',
          height: '360px',
          zIndex: -1,
          background: '#fff'
        }}
      >
        <img
          src={screenshots[1]}
          alt="Écran secondaire"
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
    )}
  </div>
);

export default PhoneFrame;
