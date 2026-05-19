import React, { useState, useRef, useEffect } from 'react';
import foodData from '../data/foodItems.json';
import loopy2 from '../assets/images/loopy-2.jpg';
import backgroundMusic from '../assets/audio/cutie.mp3';

// Dynamically import all files under src/assets/food
const foodImages = import.meta.glob('../assets/food/*', { eager: true, import: 'default' });

const OptionsPanel = ({ options, addOption, removeOption, clearOptions, spinBtnDisabled, onSpin }) => {
  const [inputValue, setInputValue] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Autoplay prevented:", e));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const tryPlayAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay blocked by browser. Waiting for user interaction...");
          
          const playOnInteract = () => {
            if (audioRef.current) {
              audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(e => console.error("Play failed on interact:", e));
            }
            ['click', 'touchstart', 'keydown'].forEach(event => 
              document.removeEventListener(event, playOnInteract)
            );
          };

          ['click', 'touchstart', 'keydown'].forEach(event => 
            document.addEventListener(event, playOnInteract, { once: true })
          );
        }
      }
    };
    
    setTimeout(tryPlayAudio, 100);
  }, []);
  const handleAdd = () => {
    const text = inputValue.trim();
    if (text) {
      const normalizedText = text.toLowerCase();
      // Tìm kiếm món ăn có trong data chứa từ khoá vừa nhập (hoặc ngược lại)
      const match = foodData.find(item => 
        item.name.toLowerCase().includes(normalizedText) || 
        normalizedText.includes(item.name.toLowerCase())
      );
      
      let finalImage = '';
      if (match && match.image) {
        if (match.image.startsWith('http://') || match.image.startsWith('https://')) {
          finalImage = match.image;
        } else {
          // Resolve from our assets/food glob, trying exact match first then flexible extensions
          const exactPath = `../assets/food/${match.image}`;
          if (foodImages[exactPath]) {
            finalImage = foodImages[exactPath];
          } else {
            // Try matching regardless of exact casing/extension
            const baseName = match.image.substring(0, match.image.lastIndexOf('.')) || match.image;
            const foundKey = Object.keys(foodImages).find(key => {
              const fileBase = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
              return fileBase.toLowerCase() === baseName.toLowerCase();
            });
            if (foundKey) {
              finalImage = foodImages[foundKey];
            }
          }
        }
      }
      
      addOption({ 
        name: text, 
        image: finalImage 
      });
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="flex flex-col gap-stack-gap">
      <div className="bg-white p-4 md:p-10 rounded-lg shadow-[0_8px_30px_rgba(254,179,193,0.3)] border border-loopy-pink/20 relative flex flex-col">
        <img 
          alt="Thinking Loopy" 
          className="hidden lg:block absolute -right-16 -top-16 w-32 h-32 object-contain drop-shadow-xl rounded-full mix-blend-multiply" 
          src={loopy2}
        />
        <div className="flex justify-center mb-4 lg:hidden">
          <img 
            alt="Thinking Loopy" 
            className="w-24 h-24 object-contain rounded-full mix-blend-multiply" 
            src={loopy2}
          />
        </div>
        
        <h1 className="text-headline-md md:text-headline-xl font-headline-xl text-primary mb-4 md:mb-6 text-center lg:text-left">Bé Iuuu Muốn Gì Nào? 🥰</h1>
        
        {/* Input Section */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between ml-2">
            <label className="font-label-lg text-on-surface-variant block">Hôm nay tụi mình quyết định gì nè?</label>
            <button 
              onClick={toggleMusic}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors mr-2 md:mr-0"
              title="Bật/tắt nhạc"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isPlaying ? 'music_note' : 'music_off'}
              </span>
            </button>
            <audio ref={audioRef} src={backgroundMusic} loop />
          </div>
          <div className="relative">
            <input 
              className="w-full h-14 md:h-16 pl-4 md:pl-6 pr-24 md:pr-32 rounded-full bg-loopy-cream border-2 border-transparent focus:border-loopy-pink focus:ring-4 focus:ring-loopy-pink/10 outline-none transition-all text-sm md:text-base font-body-lg text-on-surface" 
              placeholder="Nhập lựa chọn (VD: Trà sữa...)" 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button 
              onClick={handleAdd}
              className="absolute right-1.5 md:right-2 top-1.5 md:top-2 bottom-1.5 md:bottom-2 bg-secondary text-white px-4 md:px-6 rounded-full font-bold hover:bg-loopy-rose transition-colors flex items-center gap-1 md:gap-2 text-sm md:text-base"
            >
              <span className="material-symbols-outlined text-[18px] md:text-[24px]">add</span>
              Add
            </button>
          </div>
        </div>

        {/* List of Items */}
        <div className="mb-10 h-[300px] md:h-[350px] overflow-y-auto pr-2">
          <div className="flex justify-between items-center mb-4 px-2">
            <h3 className="font-label-lg text-tertiary">LỰA CHỌN HIỆN TẠI (<span>{options.length}</span>)</h3>
            <button 
              onClick={clearOptions}
              className="text-primary font-bold text-sm hover:underline"
            >
              Xoá Hết
            </button>
          </div>
          <div className="space-y-3">
            {options.map((opt, index) => (
              <div key={index} className="flex items-center justify-between p-3 md:p-4 bg-loopy-cream/50 rounded-full border border-loopy-pink/10 group hover:bg-white hover:shadow-md transition-all mb-2">
                <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                  <div className="w-6 h-6 md:w-8 md:h-8 shrink-0 rounded-full bg-secondary-container flex items-center justify-center text-white font-bold text-xs md:text-sm">{index + 1}</div>
                  <span className="font-body-md text-sm md:text-base text-on-surface truncate">{opt.name}</span>
                </div>
                <button 
                  onClick={() => removeOption(index)}
                  className="material-symbols-outlined text-[20px] md:text-[24px] text-outline hover:text-error transition-opacity shrink-0 ml-2"
                >
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Spin Button */}
        <button 
          onClick={onSpin}
          disabled={spinBtnDisabled}
          className="w-full py-4 md:py-6 rounded-full glossy-button text-white text-[20px] md:text-headline-md font-bold flex items-center justify-center gap-2 md:gap-4 group disabled:opacity-50 disabled:pointer-events-none mt-auto"
        >
          <span className="material-symbols-outlined text-2xl md:text-3xl group-hover:rotate-180 transition-transform duration-700">refresh</span>
          SPIN
        </button>
      </div>

      {/* Glassy Quick Tools */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <div className="bg-white/60 backdrop-blur-md p-3 md:p-6 rounded-xl border border-white flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 hover:bg-white transition-all cursor-pointer text-center md:text-left">
          <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-primary-fixed rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[20px] md:text-[24px]">auto_awesome</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-primary text-sm md:text-base leading-tight">Gợi ý Ngẫu nhiên</p>
            <p className="text-[10px] md:text-xs text-on-surface-variant mt-1 md:mt-0 leading-tight">Món mới mỗi ngày</p>
          </div>
        </div>
        <div className="bg-white/60 backdrop-blur-md p-3 md:p-6 rounded-xl border border-white flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 hover:bg-white transition-all cursor-pointer text-center md:text-left">
          <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-secondary-fixed rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-[20px] md:text-[24px]">share</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-secondary text-sm md:text-base leading-tight">Chia sẻ Tình yêu</p>
            <p className="text-[10px] md:text-xs text-on-surface-variant mt-1 md:mt-0 leading-tight">Gửi cho người ấy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsPanel;
