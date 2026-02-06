import React from 'react';
import { FEPEM } from '../../design/tokens';

const VerbatimCard = ({ verbatim }) => {
  const impactColors = {
    critical: FEPEM.colors.error,
    high: FEPEM.colors.warning,
    medium: FEPEM.colors.gold,
    positive: FEPEM.colors.success
  };

  return (
    <div
      className="p-5 rounded-xl border-l-4"
      style={{
        background: FEPEM.colors.cardBg,
        borderLeftColor: impactColors[verbatim.impact],
        borderTop: `1px solid ${FEPEM.colors.cardBorder}`,
        borderRight: `1px solid ${FEPEM.colors.cardBorder}`,
        borderBottom: `1px solid ${FEPEM.colors.cardBorder}`
      }}
    >
      <p className="text-base italic mb-3" style={{ color: FEPEM.colors.text }}>
        "{verbatim.text}"
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              background: `${FEPEM.colors.purple}15`,
              color: FEPEM.colors.purple
            }}
          >
            {verbatim.segment}
          </span>
          <span className="text-sm" style={{ color: FEPEM.colors.textMuted }}>{verbatim.author}</span>
        </div>
        <span
          className="text-xs px-2 py-0.5 rounded-full"
          style={{ background: `${impactColors[verbatim.impact]}15`, color: impactColors[verbatim.impact] }}
        >
          {verbatim.theme}
        </span>
      </div>
    </div>
  );
};

export default VerbatimCard;
