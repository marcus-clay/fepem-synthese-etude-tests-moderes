import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FEPEM } from '../../design/tokens';

const ValidationPieChart = () => {
  const data = [
    { name: 'Validées', value: 2, color: FEPEM.colors.success },
    { name: 'Partielles', value: 5, color: FEPEM.colors.warning },
    { name: 'Invalidées', value: 4, color: FEPEM.colors.error },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={4} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 6, boxShadow: '0 1px 3px 0 rgba(0,0,0,0.06)', fontSize: 13, color: '#18181B' }} itemStyle={{ color: '#3F3F46' }} labelStyle={{ color: '#18181B', fontWeight: 500 }} />
        <Legend verticalAlign="bottom" formatter={(value) => <span style={{ color: FEPEM.colors.text, fontSize: 12 }}>{value}</span>} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ValidationPieChart;
