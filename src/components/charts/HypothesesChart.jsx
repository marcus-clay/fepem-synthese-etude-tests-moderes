import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, ChevronRight, MessageSquareQuote, Zap } from 'lucide-react';
import { FEPEM } from '../../design/tokens';
import { hypothesesData } from '../../data/hypotheses';

const statusConfig = {
  valid: { label: 'Validée', color: FEPEM.colors.success, bg: '#DCFCE7', icon: CheckCircle },
  partial: { label: 'Partielle', color: FEPEM.colors.warning, bg: '#FEF3C7', icon: AlertTriangle },
  invalid: { label: 'Invalidée', color: FEPEM.colors.error, bg: '#FEE2E2', icon: XCircle },
};

const HypothesesChart = () => {
  const sorted = [...hypothesesData].sort((a, b) => b.score - a.score);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const selected = selectedId ? hypothesesData.find(h => h.id === selectedId) : null;
  const selectedCfg = selected ? statusConfig[selected.status] : null;

  return (
    <div>
      <div className="space-y-2.5">
        {sorted.map((h) => {
          const cfg = statusConfig[h.status];
          const Icon = cfg.icon;
          const isHovered = hoveredId === h.id;
          const isSelected = selectedId === h.id;

          return (
            <div
              key={h.id}
              className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all duration-200"
              style={{
                background: isSelected ? `${cfg.color}08` : isHovered ? `${FEPEM.colors.purple}04` : 'transparent',
                border: `1.5px solid ${isSelected ? cfg.color : 'transparent'}`,
              }}
              onMouseEnter={() => setHoveredId(h.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedId(selectedId === h.id ? null : h.id)}
            >
              {/* ID badge */}
              <span
                className="text-xs font-bold w-8 text-center flex-shrink-0"
                style={{ color: isSelected ? cfg.color : FEPEM.colors.purple }}
              >
                {h.id}
              </span>

              {/* Label */}
              <span
                className="text-sm w-48 flex-shrink-0 truncate"
                style={{ color: isSelected ? FEPEM.colors.purpleDark : FEPEM.colors.text, fontWeight: isSelected ? 600 : 400 }}
                title={h.name}
              >
                {h.name}
              </span>

              {/* Bar */}
              <div className="flex-1 flex items-center gap-3">
                <div className="flex-1 h-7 rounded-lg overflow-hidden" style={{ background: FEPEM.colors.background }}>
                  <div
                    className="h-full rounded-lg flex items-center justify-end pr-2.5 transition-all duration-300"
                    style={{
                      width: `${Math.max(h.score, 8)}%`,
                      background: `linear-gradient(90deg, ${cfg.color}CC, ${cfg.color})`,
                      filter: isHovered || isSelected ? 'brightness(1.1)' : 'brightness(1)',
                      boxShadow: isHovered ? `0 2px 8px ${cfg.color}40` : 'none',
                      transform: isHovered ? 'scaleY(1.1)' : 'scaleY(1)',
                      transformOrigin: 'center',
                    }}
                  >
                    <span className="text-xs font-bold text-white">{h.score}%</span>
                  </div>
                </div>

                {/* Status badge */}
                <div
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{ background: cfg.bg }}
                >
                  <Icon size={12} style={{ color: cfg.color }} />
                  <span className="text-[11px] font-semibold" style={{ color: cfg.color }}>
                    {cfg.label}
                  </span>
                </div>

                {/* Expand indicator */}
                <ChevronRight
                  size={14}
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: isSelected ? cfg.color : FEPEM.colors.textLight,
                    transform: isSelected ? 'rotate(90deg)' : 'rotate(0deg)',
                    opacity: isHovered || isSelected ? 1 : 0,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail panel */}
      {selected && selectedCfg && (
        <div
          className="mt-6 rounded-2xl border overflow-hidden"
          style={{
            background: `${selectedCfg.color}04`,
            borderColor: `${selectedCfg.color}30`,
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-sm font-bold px-3 py-1 rounded-lg"
                style={{ background: selectedCfg.bg, color: selectedCfg.color }}
              >
                {selected.id}
              </span>
              <h4 className="text-lg font-semibold" style={{ color: FEPEM.colors.purpleDark }}>
                {selected.name}
              </h4>
              <div
                className="flex items-center gap-1 px-2.5 py-1 rounded-full ml-auto"
                style={{ background: selectedCfg.bg }}
              >
                {React.createElement(selectedCfg.icon, { size: 14, style: { color: selectedCfg.color } })}
                <span className="text-xs font-semibold" style={{ color: selectedCfg.color }}>
                  {selectedCfg.label} · {selected.score}%
                </span>
              </div>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Finding */}
              <div className="p-4 rounded-xl" style={{ background: FEPEM.colors.cardBg, border: `1px solid ${FEPEM.colors.cardBorder}` }}>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={14} style={{ color: FEPEM.colors.purpleDark }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: FEPEM.colors.purpleDark }}>Constat</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: FEPEM.colors.text }}>
                  {selected.finding}
                </p>
              </div>

              {/* Evidence */}
              <div className="p-4 rounded-xl" style={{ background: FEPEM.colors.cardBg, border: `1px solid ${FEPEM.colors.cardBorder}` }}>
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquareQuote size={14} style={{ color: FEPEM.colors.purple }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: FEPEM.colors.purple }}>Verbatim</span>
                </div>
                <p className="text-sm leading-relaxed italic" style={{ color: FEPEM.colors.text }}>
                  {selected.evidence}
                </p>
              </div>

              {/* Impact */}
              <div className="p-4 rounded-xl" style={{ background: `${selectedCfg.color}06`, border: `1px solid ${selectedCfg.color}20` }}>
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={14} style={{ color: selectedCfg.color }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: selectedCfg.color }}>Impact</span>
                </div>
                <p className="text-sm leading-relaxed font-medium" style={{ color: selectedCfg.color }}>
                  {selected.impact}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HypothesesChart;
