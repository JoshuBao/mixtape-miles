export interface StoryData {
  id: string;
  personName: string;
  songTitle: string;
  artist: string;
  location: string;
  shortStory: string;
  fullStory?: string;
  journey: string;
  journeyDate: string;
  emoji?: string;
  image?: string;
  slug?: string;
  theme?: string;
}

export interface StoriesCollection {
  featured?: StoryData[];
  recent: StoryData[];
  allStories: StoryData[];
} 