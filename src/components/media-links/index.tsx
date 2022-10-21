import React from 'react';
import NextLink, { LinkProps } from 'next/link';

const MediaLinks: React.FC<LinkProps & React.HTMLProps<HTMLAnchorElement>> = ({
  children,
  href,
}) => {
  return (
    <NextLink href={href}>
      <a className="text-secondary-text hover:text-brand-hover transition mr-3" target="_blank">
        {children}
      </a>
    </NextLink>
  );
};

export default MediaLinks;
