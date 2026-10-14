import React from 'react';
import '@/styles/components/common/PageTransition.css';

const PageTransition: React.FC<{ show?: boolean }> = ({ show }) => {
  return (
    <div className={`page-transition${show ? ' show' : ''}`}>
      <div className={'block'}></div>
      <div className={'block'}></div>
      <div className={'block'}></div>
      <div className={'block'}></div>
      <div className={'block'}></div>
      <div className={'block'}></div>
    </div>
  );
};

export default PageTransition;
