export type Category = 'Air Cooling Miners' | 'Hydro Cooling Miners' | 'Immersion Miners'
export type Brand = 'MicroBT' | 'Bitmain'

export interface Product {
  slug: string
  title: string
  tag: string
  price: string
  priceUsd: number
  status: 'In Stock' | 'No Stock'
  hashrate: string
  hashrateValue: number
  power: string
  powerValue: number
  efficiency: string
  dailyProfit: string
  dailyProfitUsd: number
  payback: string
  media: { type: 'image' | 'video'; src: string }
  category: Category
  brand: Brand
  algorithm: string
  mineableCoins: { name: string; ticker: string }[]
  description: string
  specs: {
    manufacturer: string
    model: string
    release: string
    noiseLevel: string
    fans: string
    interface: string
    temperature: string
    humidity: string
  }
}

export const baseProducts: Product[] = [
  {
    slug: 'microbt-whatsminer-m66s-plus-318th',
    title: 'MicroBT WhatsMiner M66S+ (318TH)',
    tag: 'AIR',
    price: 'Dh 3,000',
    priceUsd: 817,
    status: 'In Stock',
    hashrate: '140 TH/s',
    hashrateValue: 140,
    power: '3,010 W',
    powerValue: 3010,
    efficiency: '21.5 J/TH',
    dailyProfit: '+$3.92',
    dailyProfitUsd: 3.92,
    payback: '954d',
    media: { type: 'image', src: '/asic/media/photo.png' },
    category: 'Air Cooling Miners',
    brand: 'MicroBT',
    algorithm: 'SHA-256',
    mineableCoins: [
      { name: 'Bitcoin', ticker: 'BTC' },
      { name: 'Bitcoin Cash', ticker: 'BCH' },
    ],
    description:
      'The MicroBT WhatsMiner M66S+ (318TH) is a high-performance ASIC miner designed for the SHA-256 algorithm. It delivers a hashrate of 140 TH/s with a power consumption of 3,010 W, offering an efficiency of 21.5 J/TH.',
    specs: {
      manufacturer: 'MicroBT',
      model: 'MicroBT WhatsMiner M66S+ (318TH)',
      release: 'Latest Batch',
      noiseLevel: '75db',
      fans: '4',
      interface: 'Ethernet',
      temperature: '5 - 45 °C',
      humidity: '5 - 95 %',
    },
  },
  {
    slug: 'bitmain-antminer-s21-xp-270th',
    title: 'Bitmain Antminer S21 XP (270TH)',
    tag: 'BITMAIN',
    price: '$6,800',
    priceUsd: 6800,
    status: 'No Stock',
    hashrate: '210 TH/s',
    hashrateValue: 210,
    power: '4,032 W',
    powerValue: 4032,
    efficiency: '19.2 J/TH',
    dailyProfit: '+$8.10',
    dailyProfitUsd: 8.1,
    payback: '839d',
    media: { type: 'video', src: '/asic/media/video-1.webm' },
    category: 'Hydro Cooling Miners',
    brand: 'Bitmain',
    algorithm: 'SHA-256',
    mineableCoins: [
      { name: 'Bitcoin', ticker: 'BTC' },
      { name: 'Bitcoin Cash', ticker: 'BCH' },
      { name: 'Bitcoin SV', ticker: 'BSV' },
    ],
    description:
      'The Bitmain Antminer S21 XP (270TH) is a high-performance ASIC miner designed for the SHA-256 algorithm. It delivers a hashrate of 210 TH/s with a power consumption of 4,032 W, offering an efficiency of 19.2 J/TH.',
    specs: {
      manufacturer: 'Bitmain',
      model: 'Bitmain Antminer S21 XP (270TH)',
      release: 'Jan 2026',
      noiseLevel: '75db',
      fans: '4',
      interface: 'Ethernet',
      temperature: '5 - 45 °C',
      humidity: '5 - 95 %',
    },
  },
  {
    slug: 'bitmain-antminer-s21-pro-plus-234th',
    title: 'Bitmain Antminer S21 Pro+ (234TH)',
    tag: 'FAN',
    price: '$8,900',
    priceUsd: 8900,
    status: 'In Stock',
    hashrate: '320 TH/s',
    hashrateValue: 320,
    power: '5,280 W',
    powerValue: 5280,
    efficiency: '16.5 J/TH',
    dailyProfit: '+$11.20',
    dailyProfitUsd: 11.2,
    payback: '795d',
    media: { type: 'video', src: '/asic/media/video-2.webm' },
    category: 'Immersion Miners',
    brand: 'Bitmain',
    algorithm: 'SHA-256',
    mineableCoins: [
      { name: 'Bitcoin', ticker: 'BTC' },
      { name: 'Bitcoin Cash', ticker: 'BCH' },
      { name: 'Bitcoin SV', ticker: 'BSV' },
    ],
    description:
      'The Bitmain Antminer S21 Pro+ (234TH) is a high-performance ASIC miner designed for the SHA-256 algorithm. It delivers a hashrate of 320 TH/s with a power consumption of 5,280 W, offering an efficiency of 16.5 J/TH.',
    specs: {
      manufacturer: 'Bitmain',
      model: 'Bitmain Antminer S21 Pro+ (234TH)',
      release: 'Latest Batch',
      noiseLevel: '76db',
      fans: '4',
      interface: 'Ethernet',
      temperature: '5 - 45 °C',
      humidity: '5 - 95 %',
    },
  },
]

export const products: Product[] = [...baseProducts, ...baseProducts, ...baseProducts]

export function getProductBySlug(slug: string): Product | undefined {
  return baseProducts.find((product) => product.slug === slug)
}
