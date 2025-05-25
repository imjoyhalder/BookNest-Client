import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4 mt-20 relative top-72">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <img src="https://i.ibb.co/2Y6XMG0N/Whats-App-Image-2025-05-25-at-12-09-45-9e0c479e.jpg" alt="Bookle Logo" className="w-32 mb-4 rounded-xl" />
          <p className="text-sm text-gray-300">
            Discover a world of knowledge with Bookle. We offer a curated selection of books to fuel your passion for reading.
          </p>
          <div className="flex gap-3 mt-4">
            {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href="#" className="btn btn-circle btn-outline text-white">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/profile" className="hover:underline">Your Account</Link></li>
            <li><Link to="/wishlist" className="hover:underline">Wishlist</Link></li>
            <li><Link to="/cart" className="hover:underline">Cart</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 text-sm text-gray-300 mb-2"><FaMapMarkerAlt /> Main Street, Melbourne, Australia</p>
          <p className="flex items-center gap-2 text-sm text-gray-300 mb-2"><FaEnvelope /> info@example.com</p>
          <p className="flex items-center gap-2 text-sm text-gray-300"><FaPhone /> +11002345909</p>
        </div>
      </div>

      <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Bookle. All rights reserved.
      </div>
    </footer>
  );
}
