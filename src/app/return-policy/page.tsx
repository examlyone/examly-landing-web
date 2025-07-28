'use client';
import { Typography } from "@/components/common/Typography";
import { returnRefundPolicy } from "@/data/return-refundData";

export default function ReturnRefundPolicy() {
    return (
        <div className="container mx-auto px-4 py-12 mt-16">
            <Typography variant="h1" className="text-3xl md:text-4xl font-semibold mb-6">
                Return & Refund Policy for Examly Global LLP
            </Typography>
            <div className="border border-solid mb-8" />
            {returnRefundPolicy?.map((section: any, idx: number) => (
                <div key={idx} className="mb-10">
                    {section.title && (
                        <Typography variant="h2" className="text-xl md:text-3xl font-semibold mb-4">
                            {section.title}
                        </Typography>
                    )}
                    {section.company && (
                        <p className="text-gray-700 text-xl mb-1">
                            <strong>Company:</strong> {section.company}
                        </p>
                    )}
                    {section.website && (
                        <p className="text-gray-700 text-xl mb-1">
                            <strong>Website:</strong>{" "}
                            <a href={section.website} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                                {section.website}
                            </a>
                        </p>
                    )}
                    {section.address && (
                        <p className="text-gray-700 text-xl mb-4">
                            <strong>Address:</strong> {section.address}
                        </p>
                    )}
                    {section.description && (
                        <Typography variant="body1" className="text-gray-600 mb-4 text-xl whitespace-pre-line">
                            {section.description}
                        </Typography>
                    )}
                    {section.list &&
                        section.list.map((item: any, i: number) => (
                            <div key={i} className="mb-4">
                                {item.subtitle && (
                                    <h3 className="font-semibold mb-2 text-xl">{item.subtitle}</h3>
                                )}
                                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                                    {item.items &&
                                        item.items.map((point: string, j: number) => (
                                            <li key={j}>{point}</li>
                                        ))}
                                </ul>
                            </div>
                        ))}
                    {section.content &&
                        section.content.map((contentItem: any, ci: number) => (
                            <p key={ci} className="text-gray-600 mb-2 whitespace-pre-line text-xl">
                                {contentItem.description}
                            </p>
                        ))}
                </div>
            ))}
        </div>
    );
}
