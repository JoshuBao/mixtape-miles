import { StoryData } from '@/types/story';

// Map of story slugs to image filenames
export const storyImageMap: Record<string, string[]> = {
  'benjamin-franklin-grant': ['Benjamin Franklin Grant.jpg'],
  'mike-and-ann': ['Mike & Ann.png'],
  'gary': ['Old Town Eureka Antiques.jpg'],
  'joe': ['Joe.jpg'],
  'lisa': ['Prairie Creek Visitor Center.jpg'],
  'james-haug': ['james and chung.png'],
  'chung-li': ['james and chung.png'],
  'angel-marquez': ['seaquake brewery.png'],
  'sara-alan-coco': ['Sara, Alan, and Coco.png'],
  'linnea-and-tracy': ['naturalbridges.jpg'],
  'kiki-mcgrath': ['prehistoric.jpg'],
  'ethan-higley': ['Wilson market.jpg'],
  'ryan-van-der-linde': ['sandboard.jpeg'],
  'bill': ['bill.jpg', 'bill2.jpg'],
  'carlos-munoz': ['losAmigosBurritos.jpg'],
  'greta-miller': ['GlutenFreeGem.jpeg'],
  'arielle-tichy': ['japanese garden.png'],
};

/**
 * Get image path for a story
 * @param story The story data
 * @param index The index of the image if multiple images exist (0-based)
 * @returns The full path to the image
 */
export const getStoryImagePath = (story: StoryData, index: number = 0): string | null => {
  // Check if story has a slug before accessing the map
  if (!story.slug) {
    return null;
  }
  
  const images = storyImageMap[story.slug];
  
  if (!images || images.length === 0 || index >= images.length) {
    return null;
  }
  
  return `/berkeley-oregon/${images[index]}`;
};

/**
 * Check if a story has images
 * @param story The story data 
 * @returns Boolean indicating if the story has images
 */
export const hasStoryImage = (story: StoryData): boolean => {
  // Check if story has a slug before accessing the map
  if (!story.slug) {
    return false;
  }
  
  return !!storyImageMap[story.slug] && storyImageMap[story.slug].length > 0;
};

/**
 * Get the number of images for a story
 * @param story The story data
 * @returns The number of images for the story
 */
export const getStoryImageCount = (story: StoryData): number => {
  // Check if story has a slug before accessing the map
  if (!story.slug) {
    return 0;
  }
  
  return storyImageMap[story.slug]?.length || 0;
}; 