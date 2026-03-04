/**
 * Dynamically loads gallery images from a specific category folder
 * Images should be organized in: src/assets/gallery/{CategoryName}/
 * Supported formats: .jpg, .jpeg, .png, .webp, .gif
 */

export function getGalleryImages(category: string): string[] {
  const images = import.meta.glob<{ default: string }>(
    '/src/assets/gallery/**/*.{jpg,jpeg,png,webp,gif}',
    { eager: true }
  );

  const categoryPattern = `/src/assets/gallery/${category}/`;

  return Object.keys(images)
    .filter((path) => path.includes(categoryPattern))
    .map((path) => images[path].default)
    .sort();
}
