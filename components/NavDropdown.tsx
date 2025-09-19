import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Dropdown = ({ title, data }: any) => {
  return (
    <div className="group relative h-full flex items-center">
      <button className="flex items-center gap-1 focus:outline-none group-hover:text-blue-400 transition-colors duration-300">
        {title}
        <ChevronDown
          size={16}
          className="transform group-hover:rotate-180 transition-transform duration-300"
        />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-black text-white shadow-xl rounded-xl p-8 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 invisible z-50">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-blue-400">
              {title} by Material
            </h4>
            <ul className="space-y-3">
              {data.material.map((link: any) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-blue-400">
              {title} by Style
            </h4>
            <ul className="space-y-3">
              {data.style.map((link: any) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
