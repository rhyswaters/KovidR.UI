import React from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import Title from '../Title/Title';

function mapData(results) {
  let data = [];

  for (let key in results) {
    data.push({name: key, value: results[key]});
  }

  return data;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {value}
    </text>
  );
};

export default function DaysWon(props) {
  return (
    <React.Fragment>
      <Title>Days Won</Title>
      <ResponsiveContainer>
      <PieChart width={400} height={400}>
          <Pie
            data={mapData(props.results)}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={false}
          >
            {mapData(props.results).map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}