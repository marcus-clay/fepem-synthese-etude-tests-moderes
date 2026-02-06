import React from 'react';
import { X } from 'lucide-react';
import { FEPEM } from '../../design/tokens';

const SidePanel = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-xl bg-white shadow-2xl overflow-hidden"
        style={{ animation: 'slideIn 0.3s ease-out' }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: FEPEM.colors.border, background: FEPEM.colors.background }}>
          <h2 className="text-xl font-semibold" style={{ color: FEPEM.colors.purpleDark }}>{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <X size={20} style={{ color: FEPEM.colors.textMuted }} />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-88px)] px-8 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
