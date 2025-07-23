'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/data/menuData';
import { Button } from './common/Button';
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href?: string) =>
    href && pathname.startsWith(href) ? 'text-blue-600 font-semibold' : 'text-black';

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="w-full px-6 py-4 bg-white border-b border-gray-200 shadow-sm fixed top-0 z-50">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="examly" width={106} height={37} />
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="group relative"
                onMouseEnter={() => item.items && setOpenDropdown(item.label)}
                onMouseLeave={() => item.items && setOpenDropdown(null)}
              >
                {item.items ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center gap-1 cursor-pointer hover:text-gray-500 focus:outline-none"
                    >
                      {item.label}
                      {openDropdown === item.label ? (
                        <CaretUpIcon size={14} />
                      ) : (
                        <CaretDownIcon size={14} />
                      )}
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className={`block px-4 py-2 hover:bg-gray-100 ${isActive(sub.href)}`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className={`hover:text-gray-500 ${isActive(item.href)}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Button variant="outline" href="/try-it-free" showArrow={false}>
            Try it for free
          </Button>
        </div>
      </div>
    </header>
  );
}
