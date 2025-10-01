import React from "react";

interface Props {}

const RasumeBtn: React.FC<Props> = ({}) => {
  return (
    <button
      className={`bg-brand hover:bg-brand-hover transition text-white py-2 px-4 font-bold rounded-full`}
    >
      <a href="/usmanghani.pdf" download="muhammad-usman-ghani-resume">
        Download Resume
      </a>
    </button>
  );
};

export default RasumeBtn;
