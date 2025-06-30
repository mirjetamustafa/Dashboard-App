import { Box } from '@mui/material'
import {
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from 'recharts'

const MonthlyTrends = ({ monthlyTrends }) => {
  return (
    <Box sx={{ mt: 5 }}>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={monthlyTrends}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />

          <XAxis dataKey="month" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Area
            type="monotone"
            dataKey="orders"
            stroke="#e91e63"
            name="Orders"
            fill="#f48fb1"
            fillOpacity={0.5}
          />

          <Area
            type="monotone"
            dataKey="sales"
            stroke="#1e88e5"
            name="Sales"
            fill="#90caf9"
            fillOpacity={0.4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default MonthlyTrends
