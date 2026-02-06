import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const HypothesisBadge = ({ status }) => {
  const config = {
    valid: { bg: '#DCFCE7', color: '#166534', label: 'Validée', icon: CheckCircle },
    partial: { bg: '#FEF3C7', color: '#92400E', label: 'Partielle', icon: AlertTriangle },
    invalid: { bg: '#FEE2E2', color: '#991B1B', label: 'Invalidée', icon: XCircle }
  };
  const { bg, color, label, icon: Icon } = config[status];

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
      style={{ background: bg, color }}
    >
      <Icon size={12} />
      {label}
    </span>
  );
};

export default HypothesisBadge;
