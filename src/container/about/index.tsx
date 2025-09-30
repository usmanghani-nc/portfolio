import React from "react";
import Page from "layout/page";

export default function About({}) {
  return (
    <Page>
      <div className="flex flex-col md:justify-center items-center bg-[#f6f6f7] drop-shadow-xl">
        <div className="mt-5 md:mt-10 text-center">
          <h2 className="text-primary-text font-bold text-2xl md:text-4xl md:mb-5">
            About me 🤙
          </h2>

          <p className="text-secondary-text w-[50%] mx-auto text-[18px] md:mb-5">
            With over 6 years of experience in software engineering, I
            specialize in building scalable B2B and SaaS applications. My core
            expertise lies in MERN stack, Django REST Framework, AWS Serverless,
            Angular, React-Native and Next.js. I enjoy solving complex problems,
            designing efficient architectures, and delivering impactful digital
            solutions.
          </p>
        </div>
      </div>
    </Page>
  );
}
