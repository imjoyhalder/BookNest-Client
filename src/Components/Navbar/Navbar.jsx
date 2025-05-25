import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaPhone,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaChevronDown
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Pages', path: '/pages' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`navbar bg-base-100 px-4 shadow-md justify-between items-center transition-all duration-500 ${isSticky ? 'sticky top-0 z-40 bg-blue-900 text-white' : ''}`}>
        <Link to="/" className="flex items-center">
          <img
            src="https://i.ibb.co/2Y6XMG0N/Whats-App-Image-2025-05-25-at-12-09-45-9e0c479e.jpg"
            alt="Bookle Logo"
            className="w-32 md:w-40 rounded-xl"
          />
        </Link>

        <ul className="hidden lg:flex gap-4">
          {navLinks.map(({ name, path }) => (
            <li key={name} className="dropdown dropdown-hover">
              <Link to={path} className="btn btn-ghost">
                {name} {name !== 'Contact' && <FaChevronDown className="ml-1" />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search books..."
            className="input input-bordered w-32 md:w-64  md:inline-block"
          />

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-circle btn-outline avatar">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/profile.jpg" alt="User Profile" />
              </div>
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>

          <div className="indicator hidden md:inline-flex">
            <span className="indicator-item badge badge-secondary">{wishlistCount}</span>
            <Link to="/wishlist" className="btn btn-circle btn-outline"><FaHeart /></Link>
          </div>

          <div className="indicator hidden md:inline-flex">
            <span className="indicator-item badge badge-secondary">{cartCount}</span>
            <Link to="/cart" className="btn btn-circle btn-outline"><FaShoppingCart /></Link>
          </div>

          <button className="btn btn-circle btn-outline lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Drawer */}
      <aside className={`fixed top-0 right-0 w-80 h-full bg-base-100 z-50 shadow-xl transform transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <header className="flex justify-between items-center p-4 border-b border-gray-300">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src="https://i.ibb.co/2Y6XMG0N/Whats-App-Image-2025-05-25-at-12-09-45-9e0c479e.jpg" alt="Bookle Logo" className="w-24 rounded-xl" />
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="btn btn-circle btn-ghost text-xl">
              <FaTimes />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto p-4">
            <ul className="menu space-y-2 text-blue-900">
              {navLinks.map(({ name, path }) => (
                <li key={name} className="flex justify-between items-center">
                  <Link to={path} onClick={() => setIsMenuOpen(false)}>{name}</Link>
                  {name !== 'Contact' && <FaChevronDown />}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 justify-start my-6 md:hidden">
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">{wishlistCount}</span>
                <Link to="/wishlist" className="btn btn-circle btn-outline"><FaHeart /></Link>
              </div>
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">{cartCount}</span>
                <Link to="/cart" className="btn btn-circle btn-outline"><FaShoppingCart /></Link>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-md font-bold text-blue-900 mb-2">Contact Info</h2>
              <p className="flex items-center gap-2 text-sm text-gray-700"><FaMapMarkerAlt /> Main Street, Melbourne, Australia</p>
              <p className="flex items-center gap-2 text-sm text-gray-700"><FaEnvelope /> info@example.com</p>
              <p className="flex items-center gap-2 text-sm text-gray-700"><FaClock /> Mon-Friday, 09am - 05pm</p>
              <p className="flex items-center gap-2 text-sm text-gray-700"><FaPhone /> +11002345909</p>
            </div>

            <button className="btn w-full bg-blue-800 text-white hover:bg-blue-900">
              Get A Quote <FaArrowRight className="ml-2" />
            </button>

            <div className="flex gap-4 justify-center mt-4">
              {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, index) => (
                <a key={index} href="#" className="btn btn-circle btn-ghost">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}