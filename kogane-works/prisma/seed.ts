import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: 'Brass Key Loop',
    slug: 'brass-key-loop',
    descriptionShort: 'A minimalist key loop forged from solid brass.',
    descriptionLong: 'Keep your keys elegantly organized with this durable brass loop. Over time, it will develop a unique, rich patina. Available in two finishes to match your style.',
    price: 2800,
    sku: 'KGW-BKL-01',
    stock: 50,
    images: '/images/products/brass-key-loop-brushed.jpg,/images/products/brass-key-loop-mirror.jpg',
    tags: 'keychain,brass,gift,minimalist',
    material: 'Brass',
    finish: 'Brushed, Mirror',
    dimensions: '85x40x5mm',
    weight: 45,
    careNotes: 'Brass will naturally patina over time. Use a polishing cloth to restore its shine.',
    engravingEnabled: false,
  },
  {
    name: 'Sabi Tumbler 300',
    slug: 'sabi-tumbler-300',
    descriptionShort: 'A double-walled stainless steel tumbler with a hairline finish.',
    descriptionLong: 'Enjoy your favorite beverage at the perfect temperature. This 300ml tumbler is made from durable SUS304 stainless steel and features a refined hairline finish. Ideal for both hot and cold drinks. Engravable for a personal touch.',
    price: 4500,
    sku: 'KGW-ST3-01',
    stock: 30,
    images: '/images/products/sabi-tumbler-300.jpg',
    tags: 'tumbler,stainless-steel,gift,drinkware',
    material: 'SUS304 Stainless Steel',
    finish: 'Hairline',
    dimensions: '75x75x120mm',
    weight: 220,
    careNotes: 'Hand wash recommended. Not microwave safe.',
    engravingEnabled: true,
    engravingMaxLen: 15,
  },
  {
    name: 'Kumo Stand',
    slug: 'kumo-stand',
    descriptionShort: 'A sleek aluminum stand for your smartphone or tablet.',
    descriptionLong: 'Machined from a single block of A6061 aluminum, the Kumo Stand provides a sturdy and elegant home for your device. Available in anodized black or silver, it complements any workspace.',
    price: 6200,
    sku: 'KGW-AKS-01',
    stock: 25,
    images: '/images/products/kumo-stand-black.jpg,/images/products/kumo-stand-silver.jpg',
    tags: 'stand,aluminum,tech,accessory,desk',
    material: 'A6061 Aluminum',
    finish: 'Anodized Black, Anodized Silver',
    dimensions: '80x90x100mm',
    weight: 180,
    careNotes: 'Wipe with a soft, damp cloth.',
    engravingEnabled: false,
  },
  {
    name: 'Sora Chopsticks',
    slug: 'sora-chopsticks',
    descriptionShort: 'Ultralight chopsticks precision-machined from pure titanium.',
    descriptionLong: 'Experience the future of dining with the Sora Chopsticks. Incredibly strong yet feather-light, these chopsticks are crafted from hypoallergenic, corrosion-resistant titanium. The sandblasted finish provides a secure grip.',
    price: 8000,
    sku: 'KGW-TC-01',
    stock: 15,
    images: '/images/products/sora-chopsticks.jpg',
    tags: 'chopsticks,titanium,gift,cutlery,lightweight',
    material: 'Titanium',
    finish: 'Sandblast',
    dimensions: '230x6x6mm',
    weight: 14,
    careNotes: 'Dishwasher safe.',
    engravingEnabled: false,
  },
  {
    name: 'Plate 120',
    slug: 'plate-120',
    descriptionShort: 'A versatile brass tray for your everyday essentials.',
    descriptionLong: 'A simple and beautiful solid brass plate, perfect as a catch-all tray for keys, coins, or jewelry. The aged finish gives it a warm, timeless character from day one.',
    price: 5400,
    sku: 'KGW-BP120-01',
    stock: 40,
    images: '/images/products/plate-120-aged.jpg',
    tags: 'tray,brass,organizer,home,decor',
    material: 'Brass',
    finish: 'Aged',
    dimensions: '120x120x8mm',
    weight: 350,
    careNotes: 'The aged finish is designed to evolve. Avoid abrasive cleaners.',
    engravingEnabled: false,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const p of products) {
    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: p,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
