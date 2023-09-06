import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link href="/">Home</Link>
        </li>
        <li className="navItem">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="navItem">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="navItem">
          <Link href="/about">About</Link>
        </li>
        <li className="navItem">
          <Link href="/donate">Donate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
