import React from 'react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FEPEM } from '../../design/tokens';

const SignalRadarChart = () => {
  const data = [
    { subject: 'Checkboxes', A: 5, fullMark: 7 },
    { subject: 'MDP', A: 5, fullMark: 7 },
    { subject: 'Géoloc', A: 5, fullMark: 7 },
    { subject: 'Vérification', A: 3, fullMark: 7 },
    { subject: 'Contact', A: 3, fullMark: 7 },
    { subject: 'CV', A: 2, fullMark: 7 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid stroke={FEPEM.colors.border} />
        <PolarAngleAxis dataKey="subject" tick={{ fill: FEPEM.colors.text, fontSize: 11 }} />
        <PolarRadiusAxis tick={{ fill: FEPEM.colors.textMuted, fontSize: 10 }} />
        <Radar name="Mentions" dataKey="A" stroke={FEPEM.colors.purple} fill={FEPEM.colors.purple} fillOpacity={0.3} />
        <Tooltip contentStyle={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 6, boxShadow: '0 1px 3px 0 rgba(0,0,0,0.06)', fontSize: 13, color: '#18181B' }} itemStyle={{ color: '#3F3F46' }} labelStyle={{ color: '#18181B', fontWeight: 500 }} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SignalRadarChart;
