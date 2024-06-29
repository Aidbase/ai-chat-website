import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaLinkedin, FaInstagramSquare, FaGithub } from 'react-icons/fa';
import { FaSquareThreads } from 'react-icons/fa6';
import { Menu, MenuProps } from '@/components/menu';

interface TopNavigationProps extends MenuProps {
  newChat?: () => void;
}

export const TopNavigation: FC<TopNavigationProps> = ({ page, newChat }) => {
  return (
    <div className='bg-glassmorphism backdrop-blur-md z-50 flex max-w-[1280px] w-full justify-center sm:justify-between items-center fixed py-6 px-4'>
      <div className='h-fit hidden sm:block' onClick={newChat}>
        <Link href='/'>
          <Image src='/images/logo.png' alt='logo' width='164' height='30' />
        </Link>
      </div>

      <Menu page={page} />

      <div className='hidden sm:flex w-fit items-center justify-end gap-2'>
        <a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
          <FaYoutube className='text-white text-3xl opacity-75' />
        </a>

        <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
          <FaLinkedin className='text-white text-2xl opacity-75' />
        </a>

        <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
          <FaInstagramSquare className='text-white text-2xl opacity-75' />
        </a>

        <a href='https://www.threads.net' target='_blank' rel='noreferrer'>
          <FaSquareThreads className='text-white text-2xl opacity-75' />
        </a>

        <a href='https://github.com/Aidbase/ai-chat-website' target='_blank' rel='noreferrer'>
          <FaGithub className='text-white text-2xl opacity-75' />
        </a>
      </div>
    </div>
  );
};
