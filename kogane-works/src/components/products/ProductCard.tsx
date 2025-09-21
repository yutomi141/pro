import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@prisma/client';

interface ProductCardProps {
  product: Product;
}

// A simple formatter for JPY
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-800 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          src={product.images.split(',')[0] || '/placeholder.svg'} // Fallback placeholder
          alt={product.name}
          width={400}
          height={400}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-200">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-primary">{formatPrice(product.price)}</p>
    </Link>
  );
};

export default ProductCard;
