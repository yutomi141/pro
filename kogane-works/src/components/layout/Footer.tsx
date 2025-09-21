import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} KOGANE Works. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/legal/terms" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/legal/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/legal/shipping" className="text-sm text-gray-400 hover:text-white">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
