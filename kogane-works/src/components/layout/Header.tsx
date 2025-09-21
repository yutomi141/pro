import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-secondary/50 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/90">
              KOGANE Works
            </Link>
          </div>
          <div className="hidden sm:flex sm:ml-6">
            <div className="flex space-x-4">
              <Link
                href="/products"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-300 hover:text-white">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link href="/api/auth/signin" className="text-gray-300 hover:text-white">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
