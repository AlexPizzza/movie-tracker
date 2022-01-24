const Navbar = () => {
  return (
    <nav className='flex justify-between min-w-full sm:px-4 sm:py-2 lg:px-8 lg:py-4'>
      <div className='flex flex-1 justify-between'>
        {/* Icon */}
        <div className='flex flex-grow justify-center'>Icon</div>
        <ul className='flex flex-grow'>
          <li className='mx-3'>Home</li>
          <li className='mx-3'>Watch List</li>
          <li className='mx-3'>Movies</li>
          <li className='mx-3'>TV Shows</li>
        </ul>
      </div>
      <div className='flex flex-1 justify-end'>
        <div>
          <span>Account</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
