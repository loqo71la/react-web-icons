import React from 'react';
import { SvgProps } from '../../models';

const ChevronDown: React.FC<SvgProps> = ({ title = '', className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
    </svg>
  );
};

export default ChevronDown;
