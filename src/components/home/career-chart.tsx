import React from 'react'
import { Typography } from '../common/Typography'
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts'

const data = [
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3190, pv: 4000, amt: 2100 },
]
const COLORS = ['#F9F0DF', '#C5A933', '#157669']

const CareerChart = () => {
  return (
    <div className='container mx-auto py-5 px-4 h-auto md:h-[250px] bg-black bg-[url("/career-bg.svg")] bg-cover bg-center rounded-lg shadow-lg'>
      <div className='flex flex-col md:flex-row items-center justify-between h-full gap-8 md:gap-20'>
        {/* Left Text Section */}
        <div className='w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-center'>
          <div className='flex items-center justify-center md:justify-start mb-4 gap-2'>
            <span className='w-10 h-0.5 mb-1 bg-white'></span>
            <Typography
              variant='h5'
              className='text-[10px] md:text-[12px] text-white font-semibold whitespace-nowrap'
            >
              let's move forward to life
            </Typography>
          </div>
          <Typography
            variant='caption'
            className='text-[15px] md:text-[20px] lg:text-2xl text-white max-w-xs sm:max-w-sm md:max-w-md'
          >
            Drive your career forward, not your expenses.
          </Typography>
        </div>

        {/* Right Chart Section */}
        <div className='w-full md:w-1/2 h-[200px]'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={data}>
              <Bar dataKey='uv'>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default CareerChart
