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

const data = [
  { month: 'Jan', sales: 4000, orders: 2400 },
  { month: 'Feb', sales: 3000, orders: 1398 },
  { month: 'Mar', sales: 2000, orders: 9800 },
  { month: 'Apr', sales: 2780, orders: 3908 },
  { month: 'May', sales: 1890, orders: 4800 },
  { month: 'Jun', sales: 2390, orders: 3800 },
]

const MonthyTrends = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
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

export default MonthyTrends
