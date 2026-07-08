import React from 'react';

const Logo: React.FC<{ light?: boolean }> = ({ light }) => (
  <a href="/" className="flex items-center leading-none select-none no-underline">
    <img
      src="/sokoza-logo.png"
      alt="Sokoza Events"
      className="h-12 w-auto object-contain"
    />
  </a>
);

export default Logo;
