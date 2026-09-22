import Image from 'next/image';
import logo from '@/assests/ahaduzzaman5503.jpg'
import Link from 'next/link';

const Navber = () => {
    return (
<nav className='bg-base-100 shadow-sm'>
          <div>
            <div className=" container mx-auto navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/books">Books</Link></li>
        <li>
        <Link href="#" >Two </Link>
        </li>
        <li><a>Three</a></li>
      </ul>
    </div>
      <Link href="/" >
                <div className='flex flex-row-reverse'>
                <h2  className="btn btn-ghost text-xl">books vibe</h2>
    <Image className='w-8' src={logo} alt="Books vibe logo" />
        </div>
      </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/books">Books</Link></li>
      <li>
        <Link href="#" >Two </Link>
        </li>
      <li><a>Three</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
  </div>
</div>
        </div>
</nav>
    );
};

export default Navber;