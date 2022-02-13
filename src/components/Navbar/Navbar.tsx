import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { BiHome, BiMovie } from 'react-icons/bi';
import { BsListNested } from 'react-icons/bs';
import { MdOutlineSlideshow } from 'react-icons/md';

import NavItem from './NavItem/NavItem';

const navItems = [
  {
    link: '/',
    title: 'Home',
    Icon: BiHome
  },
  {
    link: '/watch-list',
    title: 'Watch List',
    Icon: BsListNested
  },
  {
    link: '/movies',
    title: 'Movies',
    Icon: BiMovie
  },
  {
    link: '/tv-shows',
    title: 'TV Shows',
    Icon: MdOutlineSlideshow
  }
];

const Navbar = () => {
  return (
    <nav className='flex justify-between mx-auto p-5 whitespace-nowrap'>
      <div className='flex'>
        <Link className='flex mx-4 cursor-pointer w-12 sm:w-20' to={'/'}>
          Icon
        </Link>
        <div className='flex justify-evenly items-center'>
          {navItems.map(({ link, title, Icon }) => (
            <NavItem key={title} link={link} title={title} Icon={Icon} />
          ))}
        </div>
      </div>
      <div className='flex justify-end'>
        <Link
          className='flex flex-col items-center cursor-pointer group w-12 sm:w-20'
          to={'/account'}
        >
          <AiOutlineUser className='text-2xl mb-1 group-hover:animate-bounce' />
          <p className='tracking-widest opacity-0 group-hover:opacity-100'>
            Account
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
