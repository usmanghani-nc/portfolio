import React from 'react';
import Link from 'next/link';
import RasumeBtn from 'components/rasume-btn';

export default function header() {
  return (
    <div className="container mx-auto px-[10x] py-[20px]">
      <div className="flex items-center justify-between">
        <div className="h-auto w-[40px]">
          <Link href="/" passHref className="flex items-center whitespace-nowrap">
            <>
              <img src="logo.jpg" alt="Usman Ghani" className="h-full w-full rounded-full" />
              <span className="ml-[7px] font-bold text-primary-text"></span>
            </>
          </Link>
        </div>

        <RasumeBtn sm />
      </div>
    </div>
  );
}
