// components/footerData.ts
export const socialLinks = [
    {
        href: '#',
        label: 'Facebook',
        icon: (
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        ),
    },
    {
        href: '#',
        label: 'Twitter',
        icon: (
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        ),
    },
    {
        href: '#',
        label: 'LinkedIn',
        icon: (
            <>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </>
        ),
    },
    {
        href: '#',
        label: 'Instagram',
        icon: (
            <>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </>
        ),
    },
];

export const products = [
    { label: 'CPA Exam Prep', href: '/exam-prep/cpa-exam-prep' },
    { label: 'CMA Exam Prep', href: '/exam-prep/cma-exam-prep' },
    { label: 'ACCA Exam Prep', href: '/exam-prep/acca-exam-prep' },
    { label: 'EA Exam Prep', href: '/exam-prep/ea-exam-prep' },
];

export const policies = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Copyright & Trademarks', href: '/copyright-trademarks' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy and Terms', href: '/return-policy' },
    { label: 'Student Catalog & Policies', href: '#' },
    { label: 'Accessibility Statement', href: '#' },
];

export const contact = [
    {
        text: '(406) 555-0120',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
        ),
    },
    {
        text: 'support@myexamly.com',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        ),
    },
    {
        text: 'Examly Global LLP, 30 N Gould St Ste R, Sheridan, WY 82801, USA',
        icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </>
        ),
    },
];
