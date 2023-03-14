import React from 'react';
import Page from 'layout/page';

export default function About({}) {
  return (
    <Page>
      <div className="flex flex-col md:justify-center items-center">
        <div className="mt-5 md:mt-10 text-center">
          <h2 className="text-primary-text font-bold text-2xl md:text-4xl md:mb-5">About me 🤙</h2>

          <p className="text-secondary-text w-[50%] mx-auto text-[18px] md:mb-5">
            Hi folks, My name is Muhammad Usman Ghani i live in Pakistan. For past 4 years i have
            been working as a Sofware Engineer and and building all good things around Javascript.
          </p>

          {/* <p className="text-secondary-text text-[18px] md:mb-2">
            Fast-forward to today, and I’ve had the privilege of working at a start-up, a huge
            corporation.
          </p> */}
        </div>
      </div>
    </Page>
  );
}
