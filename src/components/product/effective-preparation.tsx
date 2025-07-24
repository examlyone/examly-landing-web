import React from 'react'
import { Typography } from '../common/Typography'
import { title } from 'process';
const data = [
    {
        number: 1,
        title: 'Understand & Strategize',
        description: 'We start by analyzing your exam goals and learning needs, creating a clear and effective roadmap to help you focus on what truly matters.'

    },
    {
        number: 2,
        title: 'Learn & Practice',
        description: 'Through structured content, real-time simulations, and guided practice, we ensure every concept is mastered and exam readiness is built step by step..'

    },
    {
        number: 3,
        title: 'perform & succeed',
        description: 'With continuous guidance, performance tracking, and proven strategies, we prepare you to excel confidently in the final exam.'

    },


];
const Effectivepreparation = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {/* Left column - 60% width (3/5 columns) */}
                    <div className="md:col-span-5 flex flex-col justify-center space-y-6">
                        <h2 className="text-xl md:text-4xl font-semibold flex justify-center items-center">We follow a simple, yet<br />effective preparation process</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {data.map((item) => (
                        <div key={item.number} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <div className="bg-[#F143E39] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <div className='border border-black' style={{border:"2px dotted black"}}></div>
                                <span className=" flex items-center justify-center w-14 h-14  border-solid text-white text-xl font-bold rounded-full mb-4">{item.number}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 whitespace-nowrap">{item.title}</h3>
                            <p className="text-gray-600 text-center">{item.description}</p>
                        </div>
                    ))}
            </div>
        </div>
        </div>
    )
}

export default Effectivepreparation
