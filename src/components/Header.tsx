'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/data/menuData';
import { Button } from './common/Button';

export default function Header() {
  const pathname = usePathname();

  const isActive = (href?: string) =>
    href && pathname === href ? 'text-blue-600 font-semibold' : 'text-black';

  return (
    <header className="w-full px-6 py-4 bg-white border-b border-gray-200 shadow-sm fixed top-0 z-50">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="examly" width={106} height={37} />
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.label} className="group relative">
                {item.items ? (
                  <div className="group"> {/* Added wrapper div */}
                    <span className="text-lg hover:text-gray-500 cursor-pointer">
                      {item.label}
                    </span>
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

        <div>
          <Button variant="outline" href="/try-it-free" showArrow={false}>
            Try it for free
          </Button>
        </div>
      </div>
    </header>
  );
}