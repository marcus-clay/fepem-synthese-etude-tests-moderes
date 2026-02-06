import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FEPEM } from '../../design/tokens';
import { panelData } from '../../data/panel';

const DurationChart = () => {
  const data = panelData.map(p => ({
    name: p.name,
    duration: p.duration,
    fill: p.segment === 'PE' ? FEPEM.colors.purple : FEPEM.colors.purpleLight
  }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={FEPEM.colors.border} />
        <XAxis dataKey="name" tick={{ fill: FEPEM.colors.text, fontSize: 11 }} />
        <YAxis tick={{ fill: FEPEM.colors.textMuted, fontSize: 11 }} />
        <Tooltip contentStyle={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 6, boxShadow: '0 1px 3px 0 rgba(0,0,0,0.06)', fontSize: 13, color: '#18181B' }} itemStyle={{ color: '#3F3F46' }} labelStyle={{ color: '#18181B', fontWeight: 500 }} />
        <Bar dataKey="duration" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DurationChart;
