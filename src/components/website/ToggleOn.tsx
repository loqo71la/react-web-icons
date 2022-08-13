import React from 'react';
import { SvgProps } from '../../models';

const ToggleOn: React.FC<SvgProps> = ({ title = '', className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
    </svg>
  );
};

export default ToggleOn;
