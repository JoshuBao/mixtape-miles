import { StoryData } from '@/types/story';

export const storiesData: StoryData[] = [
  {
    id: '1',
    personName: 'Benjamin Franklin Grant',
    songTitle: 'Going to California',
    artist: 'Led Zeppelin',
    location: 'The Daily Grind Espresso Bar, Northern California',
    shortStory: 'Originally from Illinois, Benjamin found himself watching the sunset dipping below the Lake Michigan horizon at 27 years old. Recently free from the grips of alcohol, he searched for a new horizon for himself.',
    fullStory: `We met Benjamin as he was taking a quick smoke and espresso break outside of The Daily Grind Espresso Bar. When asked our staple question about a song that reminded him of growing up, Ben answered quickly, a sense of nostalgia passing over him.

"Going to California" by Led Zeppelin. Originally from Illinois, Benjamin found himself watching the sunset dipping below the Lake Michigan horizon at 27 years old. Recently free from the grips of alcohol, he searched for a new horizon for himself.

Listening to "Going to California" it spoke to him, capturing his moment of change to a new chapter. When a nearby friend asked Benjamin where he was going next, he knew what to say. "I'm going as far west as I can."

Now, settled with his son in Southern Humboldt County, "Going to California" marks a new beginning, the journey to his fresh start in the west.`,
    journey: 'Berkeley-Oregon Road Trip',
    journeyDate: 'March 22, 2025',
    emoji: '🌅',
    slug: 'benjamin-franklin-grant',
    theme: 'What is a song that reminds you of growing up?'
  },
  {
    id: '2',
    personName: 'Mike & Ann',
    songTitle: 'Night Moves / Respect',
    artist: 'Bob Seger / Aretha Franklin',
    location: 'Drury-Chaney Trail, Redwoods',
    shortStory: 'Mike and Ann from Houston, Texas are on a 4-month road trip through the west coast in their mobile home. Their last trip was 6 months long and went all the way to Alaska!',
    fullStory: `We met Mike and Ann during our hike on the Drury-Chaney Trail, as they were the first people we had run into in about a mile through the redwood canopy. 

Mike and Ann are from Houston, Texas, but are on their 4-month long road trip through the west coast in their mobile home. Their last road trip was 6 months and went all the way to Alaska! They both have a deep love for photography, which draws them to all the national parks to capture the beauties of nature through a lens.

When asked for a song that reminds them of growing up, they both thought deeply before their response. Mike answered, "Night Moves" by Bob Segar because he can truly feel the way it moves him. It reminds him of the first time he heard it, in the 1970s on the radio.

Ann loves "Respect" by Aretha Franklin since she always heard it growing up. She loved the way it empowered girls of the time, before the Women's movement began.`,
    journey: 'Berkeley-Oregon Road Trip',
    journeyDate: 'March 22, 2025',
    emoji: '🌲',
    slug: 'mike-and-ann',
    theme: 'What is a song that reminds you of growing up?'
  },
  {
    id: '3',
    personName: 'Gary',
    songTitle: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    location: 'Antique Store, Old Town Eureka',
    shortStory: '71-year-old Gary reminisces about hearing "Stairway to Heaven" as a teenager on his friend Bob Yager\'s record player. He\'s been a fixture in Eureka his entire life.',
    fullStory: `We met 71 year old Gary when exploring the Old Town Eureka area, inside of an antique store, just off the main road. Cluttered with an entourage of antique treasures, we squeezed through the aisles to glance through the bins of pieces before running into Gary. 

When asked for a song that reminded him of growing up, Gary nodded, thinking to himself before saying "Stairway to Heaven" by Led Zeppelin. Gary first heard it in the 70s as a young teenager from his friend Bob Yager's record player. He loved going over and listening to their collection of record vinyls together. 

Offering more of his story, Gary shared that he has been in Eureka his whole life, first a carpenter for 23 years before his wife got tired of his garage sale findings collection and opened up an antique store for him. After she stayed home with their two babies, he took over the store. Now, 35 years later, he still resides in Eureka, selling antiques to locals and tourists that pass through the area.`,
    journey: 'Berkeley-Oregon Road Trip',
    journeyDate: 'March 22, 2025',
    emoji: '🎸',
    slug: 'gary',
    theme: 'What is a song that reminds you of growing up?'
  },
  {
    id: '4',
    personName: 'Joe',
    songTitle: 'White Room',
    artist: 'Cream',
    location: 'Local Store, Eureka',
    shortStory: 'Joe heard "White Room" by Cream constantly on the radio throughout his childhood, describing it as "a banger." As a drummer, he now appreciates the elaborate drumming sequences in the song.',
    fullStory: `We met Joe as we passed by another local store in the Eureka area. To our question about a song that reminded him of growing up, Joe gave a quick contemplation before settling on "White Room" by Cream. 

He heard it constantly on the radio throughout his childhood as his Mom and Dad always emphasized it to him as it played. "It's a banger." Joe expressed that he has always loved the way it sounds, but as he grew older and learned how to play the drums, the way he listened changed slightly. 

He hears and feels more of the elaborate drumming sequences in the songs, bringing a new enjoyment to his listening.`,
    journey: 'Berkeley-Oregon Road Trip',
    journeyDate: 'March 22, 2025',
    emoji: '🥁',
    slug: 'joe',
    theme: 'What is a song that reminds you of growing up?'
  }
];

export const getFeaturedStories = (): StoryData[] => {
  return storiesData.slice(0, 2);
};

export const getRecentStories = (): StoryData[] => {
  return [...storiesData].sort((a, b) => 
    new Date(b.journeyDate).getTime() - new Date(a.journeyDate).getTime()
  ).slice(0, 6);
};

export const getStoryBySlug = (slug: string): StoryData | undefined => {
  return storiesData.find(story => story.slug === slug);
};

export const getStoriesByJourney = (journey: string): StoryData[] => {
  return storiesData.filter(story => story.journey === journey);
}; 