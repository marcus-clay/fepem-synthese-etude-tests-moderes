import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FEPEM } from '../../design/tokens';

const ArchetypeCard = ({ archetype }) => (
  <Link
    to={`/tests-moderes/archetypes/${archetype.id}`}
    className="block p-6 rounded-2xl border group card-hover"
    style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
  >
    <div className="flex items-start gap-4 mb-4">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ background: archetype.color }}
      >
        {archetype.name.charAt(0)}
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold" style={{ color: FEPEM.colors.purpleDark }}>{archetype.name}</h4>
        <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>{archetype.subtitle}</p>
      </div>
    </div>
    <p className="text-base mb-4 leading-relaxed" style={{ color: FEPEM.colors.text }}>{archetype.description}</p>
    <div className="flex items-center justify-between">
      <span
        className="text-xs px-3 py-1 rounded-full font-medium"
        style={{ background: `${archetype.color}15`, color: archetype.color }}
      >
        {archetype.need}
      </span>
      <span
        className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0"
        style={{ color: FEPEM.colors.purple }}
      >
        Lire l'article <ArrowRight size={14} />
      </span>
    </div>
  </Link>
);

export default ArchetypeCard;
