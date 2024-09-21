import { useEffect } from 'react';

export const usePointerSync = () => {
  useEffect(() => {
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
      const x = pointerX.toFixed(2);
      const y = pointerY.toFixed(2);
      const xp = (pointerX / window.innerWidth).toFixed(2);
      const yp = (pointerY / window.innerHeight).toFixed(2);
      
      document.documentElement.style.setProperty('--x', x);
      document.documentElement.style.setProperty('--xp', xp);
      document.documentElement.style.setProperty('--y', y);
      document.documentElement.style.setProperty('--yp', yp);
    };

    document.body.addEventListener('pointermove', syncPointer);

    return () => {
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, []);
};

// Example usage (you can remove this if you're not using it directly in this file)
const PointerTracker = () => {
  usePointerSync();

  return (
    <div>
      <h1>Move your pointer around!</h1>
    </div>
  );
};

export default PointerTracker;