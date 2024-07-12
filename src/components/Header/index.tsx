'use client';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import MobileMenu from '../MobileMenu';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);
  });

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-white py-7 ${
        stickyMenu
          ? 'bg-white !py-4 shadow transition duration-100 dark:bg-black'
          : ''
      }`}
    >
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between px-3 lg:px-0">
          <Link href="/">Logo do projeto</Link>
          <nav className="hidden lg:flex">
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/"
                  className="text-xl font-medium text-gray-800 transition-all duration-100 hover:border-b-2 hover:border-yellow-500"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xl font-medium text-gray-800 hover:border-yellow-500"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-xl font-medium text-gray-800 hover:border-yellow-500"
                >
                  Acessibilidade
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xl font-medium text-gray-800 hover:border-yellow-500"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          <div className="block lg:hidden">
            {' '}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Abrir Menu"
            >
              <MdMenu className="size-6" />
            </button>
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
