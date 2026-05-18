import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center gap-2 md:gap-3 px-container-margin-mb md:px-container-margin-dt bg-surface-container-lowest py-6 md:py-8 mt-6 md:mt-12">
      <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
        <span className="material-symbols-outlined text-primary text-[20px] md:text-[24px]">refresh</span>
        <span className="text-xl md:text-2xl font-headline-md text-primary font-bold">Loopy Diary</span>
      </div>
      <p className="text-secondary text-xs md:text-sm opacity-80">© 2026 Loopy Diary. Spin for Joy!</p>
    </footer>
  );
};

export default Footer;
