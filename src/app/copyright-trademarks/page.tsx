'use client';
import { Typography } from "@/components/common/Typography";
import { copyrightPolicy } from "@/data/copyrightData";
export default function CopyrightPolicy() {
    return (
        <div className="container mx-auto px-4 py-12 mt-16 mb-8">
            <Typography variant="h1" className="text-3xl md:text-4xl font-semibold mb-6">Copyright & Trademark Policy</Typography>
            <h1 className="text-xl text-black-500 font-bold mt-2">Examly Global LLP</h1>
            <h1 className="text-xl font-medium text-gray-600 mt-2"> <span className="font-bold text-black">Address:</span> 30 N Gould St Ste R, Sheridan, WY 82801, USA</h1>
            <h1 className="text-xl text-gray-500 font-medium mt-2"><span className="font-bold text-black">Effective Date: </span> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</h1>
            <h1 className="text-xl font-bold text-black mb-8 mt-2"><span className="font-bold">Website:</span><a href="https://www.myexamly.com" className="ml-1 text-gray-700 hover:text-blue-600 font-medium"> https://www.myexamly.com </a> </h1>
            <div className="border border-solid mb-8" />
            {copyrightPolicy.policy.sections.map((section, idx) => (
                <div key={idx} className="mb-10">
                    <Typography variant="h2" className="text-xl md:text-3xl font-semibold mb-4">
                        {section.section}
                    </Typography>
                    {section.content && section.content.map((contentItem, ci) => (
                        <p key={ci} className="text-gray-600 mb-2 whitespace-pre-line text-xl">{contentItem}</p>
                    ))}
                    {section.requirements && (
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                            {section.requirements?.map((req, ri) => (
                                <li key={ri}>{req}</li>
                            ))} 
                        </ul>
                    )}
                </div>
            ))}
        </div>

    )
}