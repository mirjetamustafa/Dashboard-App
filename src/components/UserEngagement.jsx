import { Box } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from 'recharts'

const UserEngagement = () => {
  const [data, setData] = useState([])

  const generateMonthlyData = (users) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    const monthlyData = months.map((month, index) => {
      const userCount =
        users.filter((user, i) => i % 6 === index).length * 500 + 1000
      const sessionCount = Math.floor(userCount * (0.6 + Math.random() * 0.4))
      return {
        month,
        Users: userCount,
        Sessions: sessionCount,
      }
    })
    return monthlyData
  }

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users`)
      .then((res) => {
        const users = res.data.users
        const chartData = generateMonthlyData(users)
        setData(chartData)
      })
      .catch((err) => {
        console.error('Gabim gjate marrjes se te dhenave', err)
      })
  }, [])

  return (
    <Box sx={{ mt: 5 }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={'Users'} fill="#1E90FF" />
          <Bar dataKey={'Sessions'} fill="#FF0066" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default UserEngagement
