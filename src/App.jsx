import React, { useState } from 'react';
import CharacterDecors from './components/CharacterDecors';
import SlotMachine from './components/SlotMachine';
import OptionsPanel from './components/OptionsPanel';
import NavBar from './components/NavBar';
import LoveSection from './components/LoveSection';
import Footer from './components/Footer';

function App() {
  const [options, setOptions] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinTrigger, setSpinTrigger] = useState(0);

  const addOption = (opt) => {
    setOptions([...options, opt]);
  };

  const removeOption = (index) => {
    const newOpts = [...options];
    newOpts.splice(index, 1);
    setOptions(newOpts);
  };

  const clearOptions = () => {
    setOptions([]);
  };

  const triggerSpin = () => {
    setSpinTrigger(prev => prev + 1);
  };

  return (
    <div className="font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen relative">
      <CharacterDecors />
      
      <NavBar />

      <main className="pt-20 lg:pt-32 pb-20 px-container-margin-mb md:px-container-margin-dt max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-start">
          <SlotMachine 
            options={options} 
            removeOption={removeOption} 
            isSpinning={isSpinning} 
            setIsSpinning={setIsSpinning}
            spinTrigger={spinTrigger}
            onSpinComplete={() => {}}
          />
          <OptionsPanel 
            options={options} 
            addOption={addOption} 
            removeOption={removeOption} 
            clearOptions={clearOptions}
            spinBtnDisabled={isSpinning || options.length === 0}
            onSpin={triggerSpin}
          />
        </div>

        <LoveSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
