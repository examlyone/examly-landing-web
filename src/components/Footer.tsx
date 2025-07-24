'use client'

import Link from 'next/link';
import Image from 'next/image';

import { socialLinks, products, policies, contact } from '@/data/footerData';


export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 bg-white border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.svg" alt="examly" width={106} height={37} />
            </Link>
            <p className="text-lg md:text-xl text-justify text-gray-600 mb-6">
              We offer a comprehensive suite of exam preparation resources covering CPA, CMA, ACCA, and EA.
              From AI-driven study plans and live classes to real-time simulations and expert mentorship, Examly guides you to success.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(({ href, label, icon }) => (
                <Link key={label} href={href} aria-label={label}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black hover:text-gray-600 hover:scale-110 transition-all duration-300 ease-in-out"
                  >
                    {icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-600 hover:text-black text-lg">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">Licence</h3>
            <ul className="space-y-2">
              {policies.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-600 hover:text-black text-lg">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">Contact</h3>
            <ul className="space-y-4">
              {contact.map(({ text, icon }, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {icon}
                  </svg>
                  <span className="text-gray-600 text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-xl text-gray-600">&copy;{new Date().getFullYear()} Examly Global LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
