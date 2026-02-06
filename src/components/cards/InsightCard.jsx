import React from 'react';
import { FEPEM } from '../../design/tokens';
import PhoneFrame from '../ui/PhoneFrame';

const InsightHypothesisSection = ({ insight }) => {
  if (!insight.hypothesisLabel) return null;

  const labelMap = {
    hypothese: 'HYPOTHÈSE',
    besoin: 'BESOIN',
    signal: 'SIGNAL FORT'
  };

  const statusColor = insight.hypothesisStatus === 'partial' ? FEPEM.colors.warning :
                      insight.hypothesisStatus === 'invalid' ? FEPEM.colors.error :
                      insight.hypothesisStatus === 'valid' ? FEPEM.colors.success :
                      FEPEM.colors.textMuted;

  return (
    <div className="mb-4">
      <h4
        className="text-xs font-bold uppercase tracking-wider mb-1"
        style={{ color: FEPEM.colors.purpleDark }}
      >
        {labelMap[insight.hypothesisType] || 'HYPOTHÈSE'}
      </h4>
      <p className="text-sm font-semibold" style={{ color: statusColor }}>
        {insight.hypothesisLabel}
      </p>
    </div>
  );
};

const InsightVerbatims = ({ verbatims }) => (
  <div className="mb-4">
    <h4
      className="text-xs font-bold uppercase tracking-wider mb-2"
      style={{ color: FEPEM.colors.purpleDark }}
    >
      VERBATIMS CLÉS
    </h4>
    <div className={`grid gap-3 ${verbatims.length > 1 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
      {verbatims.map((v, i) => (
        <blockquote
          key={i}
          className="p-3 rounded-lg text-sm italic"
          style={{ background: FEPEM.colors.backgroundAlt, color: FEPEM.colors.text }}
        >
          "{v.text}"
          <cite
            className="block text-xs mt-2 not-italic font-medium"
            style={{ color: FEPEM.colors.purple }}
          >
            {v.author}
          </cite>
        </blockquote>
      ))}
    </div>
  </div>
);

const InsightOpportunites = ({ opportunites }) => (
  <div>
    <h4
      className="text-xs font-bold uppercase tracking-wider mb-2"
      style={{ color: FEPEM.colors.purpleDark }}
    >
      {opportunites.length > 1 ? 'OPPORTUNITÉS' : 'OPPORTUNITÉ'}
    </h4>
    <div
      className="p-4 rounded-lg border-l-4"
      style={{
        borderLeftColor: FEPEM.colors.success,
        background: `${FEPEM.colors.success}08`
      }}
    >
      <ol className="space-y-2">
        {opportunites.map((opp, i) => (
          <li key={i} className="flex gap-2 text-sm" style={{ color: FEPEM.colors.text }}>
            <span className="font-bold flex-shrink-0" style={{ color: FEPEM.colors.success }}>{i + 1}.</span>
            <span>{opp}</span>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

const InsightCard = ({ insight }) => {
  const accentColor = insight.id.startsWith('PE') ? FEPEM.colors.purple : FEPEM.colors.purpleLight;

  return (
    <div
      className="rounded-2xl border overflow-hidden card-hover"
      style={{ background: FEPEM.colors.cardBg, borderColor: FEPEM.colors.cardBorder }}
    >
      <div className="flex flex-col md:flex-row">
        <div
          className="w-full md:w-[290px] lg:w-[340px] flex-shrink-0 flex flex-col items-center justify-center p-6 md:p-8"
          style={{ background: FEPEM.colors.backgroundAlt }}
        >
          <PhoneFrame screenshots={insight.screenshots} />
        </div>

        <div className="flex-1 p-6 md:p-8">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-2 px-2 py-1 rounded"
            style={{ color: accentColor, background: `${accentColor}12` }}
          >
            {insight.label}
          </span>

          <h3
            className="text-lg lg:text-xl font-bold mb-5"
            style={{ color: FEPEM.colors.purpleDark }}
          >
            {insight.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="p-4 rounded-lg" style={{ background: '#F8F8F8' }}>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: FEPEM.colors.purpleDark }}>
                PROBLÈME
              </h4>
              <p className="text-sm" style={{ color: FEPEM.colors.text }}>{insight.probleme}</p>
            </div>
            <div className="p-4 rounded-lg" style={{ background: '#EEF6FF' }}>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: FEPEM.colors.purpleDark }}>
                CONSÉQUENCE
              </h4>
              <p className="text-sm" style={{ color: FEPEM.colors.text }}>{insight.consequence}</p>
            </div>
          </div>

          <InsightHypothesisSection insight={insight} />
          <InsightVerbatims verbatims={insight.verbatims} />
          <InsightOpportunites opportunites={insight.opportunites} />
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
