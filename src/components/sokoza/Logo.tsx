import React from 'react';

const Logo: React.FC<{ light?: boolean }> = ({ light }) => (
  <a href="#home" className="flex items-center select-none">
    <img
      src="/sokoza-logo.png"
      alt="Sokoza Events"
      className="h-12 w-auto"
    />
  </a>
);

export default Logo;
