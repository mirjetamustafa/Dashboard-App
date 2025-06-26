import { Box } from '@mui/material'
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'

const data = [
  { month: 'Jan', revenue: 4000, profit: 2400 },
  { month: 'Feb', revenue: 3000, profit: 1398 },
  { month: 'Mar', revenue: 2000, profit: 9800 },
  { month: 'Apr', revenue: 2780, profit: 3908 },
  { month: 'May', revenue: 1890, profit: 4800 },
  { month: 'Jun', revenue: 2390, profit: 3800 },
  { month: 'Jul', revenue: 3490, profit: 4300 },
  { month: 'Aug', revenue: 4000, profit: 2400 },
  { month: 'Sep', revenue: 3000, profit: 1398 },
  { month: 'Oct', revenue: 2000, profit: 9800 },
  { month: 'Nov', revenue: 2780, profit: 3908 },
  { month: 'Dec', revenue: 3890, profit: 4800 },
]

const SalesOverview = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />

          <XAxis dataKey="month" />
          <YAxis />

          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#e91e63"
            name="Profit"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#1e88e5"
            name="Revenue"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default SalesOverview
