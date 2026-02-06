import React, { useState } from 'react';
import { ArrowRight, Users, Briefcase } from 'lucide-react';
import { FEPEM } from '../../design/tokens';
import { mentalModelPE, mentalModelSPE } from '../../data/mental-model';

const MentalModelJourney = () => {
  const [view, setView] = useState('pe');
  const data = view === 'pe' ? mentalModelPE : mentalModelSPE;

  return (
    <div>
      {/* Toggle PE / SPE */}
      <div className="inline-flex rounded-xl p-1 mb-6" style={{ background: FEPEM.colors.background, border: `1px solid ${FEPEM.colors.border}` }}>
        <button
          onClick={() => setView('pe')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
          style={{
            background: view === 'pe' ? FEPEM.colors.purple : 'transparent',
            color: view === 'pe' ? 'white' : FEPEM.colors.textMuted,
          }}
        >
          <Users size={16} />
          Parcours PE
        </button>
        <button
          onClick={() => setView('spe')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
          style={{
            background: view === 'spe' ? FEPEM.colors.purple : 'transparent',
            color: view === 'spe' ? 'white' : FEPEM.colors.textMuted,
          }}
        >
          <Briefcase size={16} />
          Parcours SPE
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: FEPEM.colors.purpleDark }}>
          {data.title}
        </h3>
        <p className="text-sm" style={{ color: FEPEM.colors.textMuted }}>
          {data.subtitle}
        </p>
        <div className="flex items-center gap-6 mt-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: FEPEM.colors.success }} />
            <span className="text-xs font-medium" style={{ color: FEPEM.colors.textMuted }}>Besoin satisfait</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: FEPEM.colors.error }} />
            <span className="text-xs font-medium" style={{ color: FEPEM.colors.textMuted }}>Besoin non satisfait</span>
          </div>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto pb-4 -mx-6 px-6">
        <div className="flex gap-3" style={{ minWidth: `${data.steps.length * 200}px` }}>
          {data.steps.map((step, stepIndex) => (
            <div key={step.id} className="flex items-start gap-1">
              {/* Step column */}
              <div className="flex flex-col" style={{ width: '190px', flexShrink: 0 }}>
                {/* Needs cards (stacked) */}
                <div className="space-y-2 mb-3">
                  {step.needs.map((need, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg border text-xs leading-snug flex items-start gap-2"
                      style={{
                        background: need.validated ? `${FEPEM.colors.success}08` : `${FEPEM.colors.error}06`,
                        borderColor: need.validated ? `${FEPEM.colors.success}30` : `${FEPEM.colors.error}20`,
                      }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5"
                        style={{ background: need.validated ? FEPEM.colors.success : FEPEM.colors.error }}
                      />
                      <span style={{ color: FEPEM.colors.text }}>{need.text}</span>
                    </div>
                  ))}
                </div>

                {/* Step label (bottom) */}
                <div
                  className="p-3 rounded-xl text-center border-2"
                  style={{
                    background: FEPEM.colors.purple,
                    borderColor: FEPEM.colors.purple,
                  }}
                >
                  <div className="text-xs font-bold text-white">{step.label}</div>
                  <div className="text-[10px] text-white/60">{step.sublabel}</div>
                </div>

                {/* Insight */}
                <div className="mt-2 px-1">
                  <p className="text-[11px] italic leading-snug" style={{ color: FEPEM.colors.textMuted }}>
                    {step.insight}
                  </p>
                </div>
              </div>

              {/* Arrow between steps */}
              {stepIndex < data.steps.length - 1 && (
                <div className="flex items-end pb-16 flex-shrink-0">
                  <ArrowRight size={14} style={{ color: FEPEM.colors.border }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentalModelJourney;
