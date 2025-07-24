'use client';
import { Typography } from "@/components/common/Typography";
import { sections } from "@/data/privacyData";
export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-12 mt-16">
            <Typography variant="h1" className="text-3xl md:text-4xl font-semibold mb-6">Privacy Policy for Examly Global LLC</Typography>
            <Typography variant="body1" className="text-xl text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long'})}</Typography>
            <Typography variant="body1" className="text-xl text-gray-500 mb-8 text-justify">
                Examly Global LLC ("Examly," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines the types of personal information we collect, how we collect, use, and process that information, and the choices you can make regarding how your personal information is used when you use our website, mobile applications, webinars, and other services (collectively, the "Service").
            </Typography>
            <Typography variant="body1" className="text-xl text-gray-500 mb-8 text-justify">
                By using our Service, you consent to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with the terms of this policy, please do not use our Service.
            </Typography>
            <div className="border border-solid mb-8" />
            {sections?.map((section: any, idx) => (
                <div key={idx} className="mb-10">
                    <Typography variant="h2" className="text-xl md:text-3xl font-semibold mb-4">
                        {section.title}
                    </Typography>
                    {section.description && <p className="text-gray-600 mb-2 text-xl">{section.description}</p>}
                    {section.list && section.list.map((item: any, i: any) => (
                        <div key={i} className="mb-4">
                            {item.subtitle && <h3 className="font-semibold mb-1 text-xl">{item.subtitle}</h3>}
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                                {item.items.map((point: any, j: any) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {section.content && section.content.map((contentItem: any, ci: any) => (
                        <p key={ci} className="text-gray-600 mb-2 whitespace-pre-line text-xl">{contentItem.description}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}
