import React from 'react';
import coupleLoopy from '../assets/images/couple_loopy.png';
import memoryLoopy from '../assets/images/memory_loopy.png';
const LoveSection = () => {
  return (
    <section className="mt-32">
      <h2 className="font-headline-lg text-center text-primary mb-12">Dành Riêng Cho Hai Đứa Mình ❤️</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-10 rounded-lg shadow-sm border border-loopy-pink/20 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
            <img alt="Couple Loopy" className="rounded-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-700 shadow-md" src={coupleLoopy}/>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="font-headline-md text-secondary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">favorite</span> 
              Nhật Ký Hẹn Hò
            </h3>
            <p className="text-body-md text-on-surface-variant">Không còn phải đau đầu nghĩ xem hôm nay ăn gì, đi đâu chơi hay xem phim gì. Cứ để vòng quay quyết định giúp hai đứa mình nha! Mọi khoảnh khắc bên nhau đều là kỷ niệm đẹp.</p>
            <button className="mt-6 bg-primary/10 text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">add_reaction</span>
              Thêm ý tưởng hẹn hò
            </button>
          </div>
        </div>
        
        <div className="bg-primary-container/20 p-8 rounded-lg border border-loopy-pink/30 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm overflow-hidden border-2 border-primary-fixed p-1">
            <img alt="Memory Loopy" className="w-full h-full object-cover rounded-full" src={memoryLoopy}/>
          </div>
          <h3 className="font-headline-md text-primary mb-2 flex items-center gap-2 justify-center">
            <span className="material-symbols-outlined text-primary">photo_library</span>
            Kỷ Niệm
          </h3>
          <p className="text-body-md text-on-surface-variant">Lưu lại những lần quay trúng món ngon hay những trò đùa vui nhộn mà hai đứa đã cùng nhau trải qua.</p>
        </div>
      </div>
    </section>
  );
};

export default LoveSection;
