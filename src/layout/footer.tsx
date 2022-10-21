import React from 'react';

export default function footer() {
  return (
    <footer className="p-[20px]">
      <div className="container mx-auto text-center px-[10x] transition text-primary-text text-[15px]  hover:text-brand-hover">
        <a href="https://github.com/usmanghanidev" target="_blank">
          &#169; Muhammad Usman Ghani {new Date().getFullYear()}
        </a>
      </div>
    </footer>
  );
}
