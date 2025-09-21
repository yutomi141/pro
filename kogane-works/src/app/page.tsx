import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            KOGANE Works
          </h1>
          <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
            High-quality metal products for design-conscious individuals.
            We blend traditional craftsmanship with modern aesthetics.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Philosophy</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Crafting the Future of Metalwork
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We believe in creating products that are not only beautiful but also built to last. Our commitment to quality and innovation is at the heart of everything we do.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    {/* Icon placeholder */}
                    <span className="text-primary-foreground">✨</span>
                  </div>
                  Premium Materials
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  We source only the finest metals, ensuring durability and a superior finish for every product.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    {/* Icon placeholder */}
                    <span className="text-primary-foreground">🎨</span>
                  </div>
                  Modern Design
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  Our design philosophy merges minimalist aesthetics with functional elegance.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    {/* Icon placeholder */}
                    <span className="text-primary-foreground">職人</span>
                  </div>
                  Expert Craftsmanship
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  Each piece is meticulously crafted by skilled artisans with years of experience.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    {/* Icon placeholder */}
                    <span className="text-primary-foreground">♻️</span>
                  </div>
                  Sustainable Practices
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  We are committed to environmentally friendly processes and sustainable sourcing.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}