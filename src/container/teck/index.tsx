import React from 'react';
import Page from 'layout/page';

const teckList: String[] = [
  'ReactJs',
  'NextJS',
  'Angular',
  'NodeJS',
  'React Native',
  'MongoDB',
  'AWS (Lambda, s3, ec2)',
  'HTML 5/CSS/JavaScript(es6)',
  'Git/Webpack/Babel',
  'Web Extensions',
  'SCSS/SASS',
  'Styled-Components',
  'Tailwindcss',
];

export default function Teck({}) {
  return (
    <Page>
      <div className="flex flex-col md:justify-center items-center">
        <div className="mt-5 md:mt-10 text-center">
          <h2 className="text-primary-text font-bold text-2xl md:text-4xl md:mb-5 w-[60%] mx-auto">
            Here are a few technologies I’ve been working with recently ✨
          </h2>

          <div className="text-left mt-[70px] flex justify-center">
            <ul className="">
              {teckList.map((_teck, idx) => {
                return (
                  <li key={idx} className="text-secondary-text text-[16px] px-[10px]">
                    <span>⚬</span>
                    <span className="ml-[10px]">{_teck}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="py-[100px]"></div> */}
    </Page>
  );
}
