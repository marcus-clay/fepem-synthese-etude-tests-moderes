import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { FEPEM } from '../../design/tokens';

const StatCard = ({ label, value, subtext, trend, icon: Icon, onClick }) => (
  <div
    className={`p-6 rounded-2xl border${onClick ? ' cursor-pointer transition-all hover:shadow-md' : ''}`}
    style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
    onClick={onClick}
    role={onClick ? 'button' : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
  >
    <div className="flex items-start justify-between mb-4">
      <div
        className="p-3 rounded-xl"
        style={{ background: `${FEPEM.colors.purple}10` }}
      >
        <Icon size={20} style={{ color: FEPEM.colors.purple }} />
      </div>
      {trend && (
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
          trend === 'up' ? 'bg-green-50 text-green-600' :
          trend === 'down' ? 'bg-red-50 text-red-600' :
          'bg-gray-50 text-gray-600'
        }`}>
          {trend === 'up' ? <TrendingUp size={14} className="inline mr-1" /> :
           trend === 'down' ? <TrendingDown size={14} className="inline mr-1" /> :
           <Minus size={14} className="inline mr-1" />}
          {trend}
        </span>
      )}
    </div>
    <div className="text-3xl font-bold mb-1" style={{ color: FEPEM.colors.purpleDark }}>{value}</div>
    <div className="text-base" style={{ color: FEPEM.colors.textMuted }}>{label}</div>
    {subtext && <div className="text-sm mt-2" style={{ color: FEPEM.colors.textLight }}>{subtext}</div>}
  </div>
);

export default StatCard;
