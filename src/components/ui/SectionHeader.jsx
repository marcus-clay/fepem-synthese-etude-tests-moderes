import React from 'react';
import { FEPEM } from '../../design/tokens';

const SectionHeader = ({ title, subtitle, action }) => (
  <div className="flex items-end justify-between mb-10">
    <div>
      <h2
        className="text-2xl md:text-3xl font-bold mb-2"
        style={{ color: FEPEM.colors.purpleDark }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base" style={{ color: FEPEM.colors.textMuted }}>{subtitle}</p>
      )}
    </div>
    {action}
  </div>
);

export default SectionHeader;
