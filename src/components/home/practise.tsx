import React from 'react'
import { Typography } from '../common/Typography'
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3190,
        pv: 4000,
        amt: 2100,
    },
];


const practise = () => {
    return (
        <div className='container mx-auto py-5 px-3 h-[200px] bg-[url("/bg.png")] bg-cover bg-center  rounded-lg shadow-lg'>
            <div className=' flex flex-col-2 items-center justify-center gap-10 text-center h-full'>
                <div className="w-1/2 flex flex-col items-center justify-center ">
                    <div className='flex sm:items-center justify-center mb-6 ml-15'>
                        <span className='w-10 h-0.5 mb-1 bg-blue-500 '></span><Typography variant="h5" className='text-[10px] md:text-[12px] sm:whitespace-nowrap text-black font-semibold w-40'>
                            let's move forward to life</Typography>
                    </div>
                    <div className='sm:flex sm:items-center sm:justify-center'>
                        <Typography variant="caption" className='text-[15px] md:text-[20px] lg:text-2xl sm:ml-10 text-white w-50'>
                            Drive your career forward, not your expenses.
                        </Typography>
                    </div>
                </div>
                <div className='w-1/2 h-full'>
            
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart width={100} height={100} data={data}>
                            <Bar dataKey="uv" fill="#2117e9ff" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default practise
