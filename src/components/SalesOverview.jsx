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

const SalesOverview = ({ data }) => {
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
