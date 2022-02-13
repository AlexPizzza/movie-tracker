import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  link: string;
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const NavItem = ({ link, title, Icon }: Props) => {
  return (
    <Link
      className='flex flex-col items-center cursor-pointer group w-12 sm:w-20'
      to={link}
    >
      <Icon className='text-2xl mb-1 group-hover:animate-bounce' />
      <p className='tracking-widest opacity-0 group-hover:opacity-100'>
        {title}
      </p>
    </Link>
  );
};

export default NavItem;
