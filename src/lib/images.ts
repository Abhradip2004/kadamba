export const PRODUCT_IMAGE_POOL = [
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.27.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.28.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.32 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.32.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.34 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.34 (2).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.34.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.35 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.35.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.36 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.36 (2).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.36.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.37 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.37 (2).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.37 (3).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.37 (4).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.37.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.38 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.38.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.39 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.39.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.40 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.40.jpeg",
];

/**
 * Returns a set of unique random images from the pool.
 */
export function getRandomImages(count: number): string[] {
  const shuffled = [...PRODUCT_IMAGE_POOL].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
