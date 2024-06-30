import Link from 'next/link';
import React, { FC } from 'react';
import { FaGithub, FaRegQuestionCircle } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';

export interface MenuProps {
  page?: 'chat' | 'about';
}

export const Menu: FC<MenuProps> = ({ page }) => {
  return (
    <div className='flex bg-[#2040a8] rounded-lg p-2 max-w-full'>
      <Link href='/'>
        <button
          className={`flex items-center p-2 mr-2 rounded-md focus:outline-none shrink-0 ${
            page === 'chat' ? 'bg-[#2a4dc1] text-white' : 'hover:bg-[#2a4dc1] text-gray-200'
          }`}
        >
          <FiMessageCircle
            className={`mr-1 ${page === 'chat' ? 'text-blue-400' : 'text-gray-200'}`}
          />
          <span className={`${page === 'chat' ? 'text-white' : 'text-gray-200'}`}>Chat</span>
        </button>
      </Link>

      <Link href='/about'>
        <button
          className={`flex items-center p-2 mr-2 rounded-md focus:outline-none shrink-0 ${
            page === 'about' ? 'bg-[#2a4dc1] text-white' : 'hover:bg-[#2a4dc1] text-gray-200'
          }`}
        >
          <FaRegQuestionCircle
            className={`mr-1 ${page === 'about' ? 'text-blue-400' : 'text-gray-200'}`}
          />
          <span className={`${page === 'about' ? 'text-white' : 'text-gray-200'}`}>About</span>
        </button>
      </Link>

      <button className=' p-2 rounded-md focus:outline-none hover:bg-[#2a4dc1] text-gray-200 truncate'>
        <a
          className='flex items-center'
          href='https://github.com/Aidbase/ai-chat-website'
          target='_blank'
        >
          <FaGithub className='mr-1 shrink-0 text-gray-200' />
          <span className='text-gray-200 truncate'>Use template</span>
        </a>
      </button>
    </div>
  );
};
