import React from 'react';
import { AlertTriangle, Zap, CheckCircle } from 'lucide-react';
import { FEPEM } from '../../design/tokens';

const IssueCategoryCard = ({ issue, onClick }) => {
  const severityConfig = {
    critical: { bg: '#FEE2E2', border: '#EF4444', icon: AlertTriangle },
    high: { bg: '#FEF3C7', border: '#F59E0B', icon: AlertTriangle },
    medium: { bg: '#E0F2FE', border: '#0EA5E9', icon: Zap },
    positive: { bg: '#DCFCE7', border: '#22C55E', icon: CheckCircle }
  };
  const config = severityConfig[issue.severity];
  const Icon = config.icon;

  return (
    <div
      className="p-5 rounded-xl border cursor-pointer card-hover btn-press"
      style={{ background: config.bg, borderColor: config.border }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon size={18} style={{ color: config.border }} />
          <span className="font-semibold text-base" style={{ color: FEPEM.colors.purpleDark }}>{issue.category}</span>
        </div>
        <span className="text-2xl font-bold" style={{ color: config.border }}>{issue.count}</span>
      </div>
      <div className="flex flex-wrap gap-1">
        {issue.items.slice(0, 3).map((item, i) => (
          <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white/60" style={{ color: FEPEM.colors.text }}>{item}</span>
        ))}
        {issue.items.length > 3 && (
          <span className="text-xs px-2 py-0.5" style={{ color: FEPEM.colors.textMuted }}>+{issue.items.length - 3}</span>
        )}
      </div>
    </div>
  );
};

export default IssueCategoryCard;
