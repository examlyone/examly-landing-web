'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 bg-white border-t border-gray-200">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.svg" alt="examly" width={106} height={37} />
            </Link>
            <p className="text-sm text-gray-600 mb-6">
              We offer a comprehensive suite of exam preparation resources covering CPA, CMA, 
              ACCA, and EA. From AI-driven study plans and live classes to real-time simulations 
              and expert mentorship, Examly has the tools and expertise to guide you to success.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black hover:text-gray-600">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black hover:text-gray-600">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black hover:text-gray-600">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black hover:text-gray-600">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>

          {/* Products Column */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/exam-prep/cpa-exam-prep" className="text-gray-600 hover:text-black">CPA Exam Prep</Link></li>
              <li><Link href="/exam-prep/cma-exam-prep" className="text-gray-600 hover:text-black">CMA Exam Prep</Link></li>
              <li><Link href="/exam-prep/acca-exam-prep" className="text-gray-600 hover:text-black">ACCA Exam Prep</Link></li>
              <li><Link href="/exam-prep/ea-exam-prep" className="text-gray-600 hover:text-black">EA Exam Prep</Link></li>
            </ul>
          </div>

          {/* Licence Column */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Licence</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/copyright" className="text-gray-600 hover:text-black">Copyright & Trademarks</Link></li>
              <li><Link href="/cookie-policy" className="text-gray-600 hover:text-black">Cookie Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-black">Refund Policy and Terms</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Student Catalog & Policies</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black">Accessibility Statement</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600">(406) 555-0120</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">info@myexamly.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">&copy;2025 Examly Global LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}