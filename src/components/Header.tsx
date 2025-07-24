'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/data/menuData';
import { Button } from './common/Button';
import { List, X } from '@phosphor-icons/react';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href?: string) =>
    href && pathname === href ? 'text-[#143E39] font-semibold' : 'text-black';

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <header className="w-full py-4 bg-white border-b border-gray-200 shadow-sm fixed top-0 z-50">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="examly" width={130} height={87} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.label} className="group relative">
                {item.items ? (
                  <div className="group">
                    <Link href={item.href!} className={`text-lg hover:text-gray-500 ${isActive(item.href)}`}>
                      {item.label}
                    </Link>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
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
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className={`text-lg hover:text-gray-500 ${isActive(item.href)}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Try Button - Desktop */}
        <div className="hidden lg:block">
          <Button variant="outline" href="/try-it-free" showArrow={false}>
            Try it for free
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-black" onClick={toggleMobileMenu}>
          {mobileOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 px-6">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.items ? (
                  <div>
                    <p className="font-semibold text-base">{item.label}</p>
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className={`block text-gray-600 hover:text-black ${isActive(sub.href)}`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className={`block text-base ${isActive(item.href)} hover:text-black`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Button variant="outline" href="/try-it-free" showArrow={false}>
                Try it for free
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
