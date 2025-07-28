'use client';
import { Typography } from "@/components/common/Typography";
import { termsOfService } from "@/data/terms-serviceData";

export default function TermsOfService() {
  const website = "https://www.myexamly.com";
  const owner = "Examly Global LLP, 30 N Gould St Ste R, Sheridan, WY 82801, USA";

  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <Typography variant="h1" className="text-3xl md:text-4xl font-semibold mb-4">
        Terms of Service for Examly Global LLP
      </Typography>
      <Typography variant="body1" className="text-xl text-gray-500 mb-2">
        <strong>Effective Date:</strong>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long'})}
      </Typography>
      <Typography variant="body1" className="text-xl text-gray-500 mb-2">
        <strong>Website:</strong>{" "}
        <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          {website}
        </a>
      </Typography>
      <Typography variant="body1" className="text-xl text-gray-500 mb-8">
        <strong>Owner:</strong> {owner}
      </Typography>

      <div className="border border-solid mb-8" />
        {termsOfService.map((section, index) => (
            <div key={index} className="mb-10">
            <Typography variant="h2" className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">
                {section.title}
            </Typography>
            {section.description && (
                <p className="font-medium mb-1 text-xl">{section.description}</p>
            )}
            {section.list && section.list.map((item, i) => (
                <div key={i} className="mb-4">
                {item.description && <h3 className="font-small mb-3 text-xl">{item.description}</h3>}
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                    {item.items.map((point, j) => (
                    <li key={j}>{point}</li>
                    ))}
                </ul>
                </div>
            ))}
            {section.content && section.content.map((contentItem, ci) => (
                <p key={ci} className="text-gray-600 mb-2 whitespace-pre-line text-xl">
                {contentItem.description}
                </p>
            ))}
            </div>
        ))}
    </div>
  );
}
