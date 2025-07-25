'use client';

import Link from 'next/link';
import Image from 'next/image';
import { socialLinks, products, policies, contact } from '@/data/footerData';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-36 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
          {/* Logo & Description */}
          <div className="-mt-4">
            <Link href="/" className="inline-block ">
              <Image src="/logo.svg" alt="examly" width={136} height={67} />
            </Link>
            <p className="text-sm text-gray-600 text-justify leading-relaxed">
              We offer a comprehensive suite of exam preparation resources covering CPA, CMA, ACCA, and EA. From AI-driven study plans and live classes to real-time simulations and expert mentorship, Examly guides you to success.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
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

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-3">Products</h3>
            <ul className="space-y-2">
              {products.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm sm:text-md text-gray-600 hover:text-black">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* License */}
          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-3">Licence</h3>
            <ul className="space-y-2">
              {policies.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm sm:text-md text-gray-600 hover:text-black">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-3">Contact</h3>
            <ul className="space-y-4">
              {contact.map(({ text, icon }, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 mr-2 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {icon}
                  </svg>
                  <span className="text-sm sm:text-md text-gray-600">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm sm:text-md text-gray-600">
            &copy; {new Date().getFullYear()} Examly Global LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
