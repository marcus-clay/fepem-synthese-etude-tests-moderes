import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { FEPEM } from '../../design/tokens';

const AppleModal = ({ isOpen, onClose, title, children }) => {
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setClosing(false);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setMounted(false);
      setClosing(false);
      document.body.style.overflow = '';
      onClose();
    }, 200);
  }, [onClose]);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape' && isOpen) handleClose();
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isOpen, handleClose]);

  if (!mounted && !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-md ${closing ? 'backdrop-exit' : 'backdrop-enter'}`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col ${closing ? 'modal-exit' : 'modal-enter'}`}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div
            className="w-10 h-1.5 rounded-full"
            style={{ background: FEPEM.colors.border }}
          />
        </div>

        {/* Header */}
        <div
          className="flex items-center justify-between px-6 pb-4 pt-2 border-b"
          style={{ borderColor: FEPEM.colors.cardBorder }}
        >
          <h2 className="text-lg font-bold" style={{ color: FEPEM.colors.purpleDark }}>
            {title}
          </h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100 btn-press"
          >
            <X size={18} style={{ color: FEPEM.colors.textMuted }} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppleModal;
