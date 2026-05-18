import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import loopyOkiela from '../assets/images/loopy-3.jpg';
import loopyHogg from '../assets/images/loopy-7.jpeg';

const SlotMachine = ({ options, removeOption, isSpinning, setIsSpinning, spinTrigger, onSpinComplete }) => {
  const trackRef = useRef(null);
  const [showResult, setShowResult] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState(null);

  // We construct the track with repeated options just like original HTML
  const getTrackItems = () => {
    if (options.length === 0) {
      return [{ id: 'empty', label: 'Add some options!' }];
    }
    const repeatCount = Math.max(6, Math.floor(30 / options.length));
    const repeated = [];
    for (let i = 0; i < repeatCount; i++) {
      options.forEach((opt, idx) => {
        repeated.push({ id: `${i}-${idx}`, label: opt.name, originalIndex: idx });
      });
    }
    return repeated;
  };

  const trackItems = getTrackItems();

  useEffect(() => {
    if (spinTrigger > 0) {
      handleSpin();
    }
  }, [spinTrigger]);

  const resetSlot = () => {
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = 'translateY(0px)';
    }
    setShowResult(false);
  };

  const handleSpin = () => {
    if (isSpinning || options.length === 0) return;
    setIsSpinning(true);
    resetSlot();

    const itemHeight = 100;
    const totalItems = trackItems.length;
    const randomWinnerIndex = Math.floor(Math.random() * options.length);
    setWinnerIndex(randomWinnerIndex);

    // target the last set of options in the list to spin long enough
    const targetGlobalIndex = totalItems - options.length + randomWinnerIndex;
    const spinDistance = targetGlobalIndex * itemHeight;

    if (trackRef.current) {
      // Force reflow
      void trackRef.current.offsetHeight;
      trackRef.current.style.transition = 'transform 4s cubic-bezier(0.1, 0, 0, 1)';
      trackRef.current.style.transform = `translateY(-${spinDistance}px)`;
    }

    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
      if (onSpinComplete) onSpinComplete();
      
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF85A2', '#FEB3C1', '#884d5a', '#ffffff']
      });
    }, 4000);
  };

  const handleOkiela = () => {
    setShowResult(false);
  };

  const handleHogg = () => {
    if (winnerIndex !== null) {
      removeOption(winnerIndex);
      resetSlot();
      setWinnerIndex(null);
    }
  };

  // When options change, reset slot if not spinning
  useEffect(() => {
    if (!isSpinning) {
      resetSlot();
    }
  }, [options.length]);

  return (
    <div className="relative flex flex-col items-center justify-center p-3 md:p-8 bg-white/40 rounded-xl backdrop-blur-sm border border-loopy-pink/20 lg:sticky lg:top-32">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="w-12 h-12 bg-loopy-rose rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <span className="material-symbols-outlined text-white">expand_more</span>
        </div>
      </div>
      
      <div className={`sunburst ${showResult ? 'active' : ''}`} id="sunburst"></div>
      
      <div className="slot-container">
        <div className="slot-overlay"></div>
        <div className="selection-marker"></div>
        <div className="slot-track" ref={trackRef}>
          {trackItems.map((item, idx) => (
            <div key={idx} className={`slot-item ${item.id === 'empty' ? 'text-outline italic text-lg' : ''}`}>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {showResult && winnerIndex !== null && options[winnerIndex]?.image && (
        <div className="mt-8 flex justify-center animate-zoom-in relative z-10">
          <img 
            src={options[winnerIndex].image} 
            alt={options[winnerIndex].name} 
            className="w-40 h-40 object-cover rounded-full shadow-2xl border-4 border-white"
          />
        </div>
      )}

      <div className={`mt-6 flex gap-3 md:gap-4 w-full justify-center transition-opacity duration-500 ${showResult ? 'opacity-100 flex' : 'opacity-0 hidden'}`}>
        <button 
          onClick={handleOkiela}
          className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 bg-white border-2 border-primary text-primary px-3 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:font-label-lg hover:bg-primary-fixed transition-all active:scale-95"
        >
          <img src={loopyOkiela} alt="Okiela" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm" />
          Okiela
        </button>
        <button 
          onClick={handleHogg}
          className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 bg-secondary text-white px-3 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:font-label-lg hover:bg-loopy-rose transition-all active:scale-95 shadow-md"
        >
          <img src={loopyHogg} alt="Hogg" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/30 shadow-sm" />
          Hogg
        </button>
      </div>
      
      {!showResult && (
        <div className="mt-4 md:mt-8 text-center hidden md:block">
          <h2 className="font-headline-lg text-secondary mb-2">Chưa biết chọn gì sao? 🤔</h2>
          <p className="text-body-lg text-on-surface-variant max-w-sm">Cứ nhập hết vào đây, để vũ trụ Loopy quyết định thay hai đứa mình nhé! ✨</p>
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
