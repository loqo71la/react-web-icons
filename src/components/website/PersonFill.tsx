import React from 'react';
import { SvgProps } from '../../models';

const PersonFill: React.FC<SvgProps> = ({ title = '', className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
  );
};

export default PersonFill;
