import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-1.5 md:py-3 w-full bg-white/70 backdrop-blur-md rounded-full mt-2 md:mt-4 mx-auto max-w-[95%] md:max-w-[90%] shadow-lg">
      <div className="flex items-center gap-1 md:gap-2">
        <span className="material-symbols-outlined text-secondary text-[24px] md:text-[32px]">refresh</span>
        <span className="text-headline-md md:font-headline-xl font-bold text-primary">Loopy Diary 💖</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-lg transition-transform hover:scale-105" href="#">Luật Chơi</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors font-label-lg" href="#">Kỉ Niệm</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors font-label-lg" href="#">Chủ Đề</a>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button className="material-symbols-outlined text-secondary hover:rotate-90 transition-transform duration-500 text-[20px] md:text-[24px]">settings</button>
        <button className="bg-secondary-container text-on-secondary-container px-4 py-1 md:px-6 md:py-2 rounded-full font-bold text-sm md:font-label-lg hover:scale-105 active:scale-95 transition-all">Gắn Kết</button>
      </div>
    </nav>
  );
};

export default NavBar;
