import React from 'react';
import loopy1 from '../assets/images/loopy-1.jpg';
import loopy2 from '../assets/images/loopy-2.jpg';
import loopy6 from '../assets/images/loopy-6.jpg';
import loopy4 from '../assets/images/loopy-4.jpg';

const CharacterDecors = () => {
  return (
    <>
      <img 
        alt="Decorative Loopy" 
        className="fixed top-20 left-[-50px] w-48 h-48 object-contain opacity-40 -z-10 -rotate-12 pointer-events-none md:left-4 animate-float rounded-full mix-blend-multiply" 
        src={loopy1}
      />
      <img 
        alt="Decorative Loopy" 
        className="fixed top-[40%] right-[-40px] w-40 h-40 object-contain opacity-30 -z-10 rotate-12 pointer-events-none md:right-10 animate-wiggle rounded-full mix-blend-multiply" 
        src={loopy2}
      />
      <img 
        alt="Decorative Loopy" 
        className="fixed bottom-[25%] left-10 w-52 h-52 object-contain opacity-30 -z-10 -rotate-6 pointer-events-none hidden lg:block animate-pulse-subtle rounded-full mix-blend-multiply" 
        src={loopy6}
      />
      <img 
        alt="Decorative Loopy" 
        className="fixed bottom-20 right-5 w-44 h-44 object-contain opacity-40 -z-10 rotate-[15deg] pointer-events-none animate-swing rounded-full mix-blend-multiply" 
        src={loopy4}
      />
    </>
  );
};

export default CharacterDecors;
