import Link from 'next/link';
import { useEffect } from 'react';

import React from 'react';

const MobileMenu = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <div
        className="absolute inset-0 bg-gray-800 opacity-50"
        onClick={() => setIsOpen(false)}
        role="presentation"
      ></div>
      <div
        className={`absolute right-0 h-full w-64 bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 focus:outline-none"
            aria-label="Fechar Menu"
          >
            {/* Ícone de Fechar */}
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                className="text-xl font-medium text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-xl font-medium text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/accessibility"
                className="text-xl font-medium text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Acessibilidade
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-xl font-medium text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
