import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { FEPEM } from '../../design/tokens';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center shadow-lg border btn-press"
      style={{
        background: FEPEM.colors.cardBg,
        borderColor: FEPEM.colors.cardBorder,
        animation: 'fadeInUp 0.3s ease forwards',
      }}
      aria-label="Retour en haut"
    >
      <ChevronUp size={20} style={{ color: FEPEM.colors.purple }} />
    </button>
  );
};

export default BackToTopButton;
