import quotesData from '../data/quotes.json';

export const TOPICS = ['motivation', 'success', 'life'] as const;
export type Topic = typeof TOPICS[number];

export const getQuotesByTopic = (topic: Topic): string[] => {
  const topicData = quotesData.quotes.find(q => q.topic === topic);
  return topicData ? topicData.quotes : [];
};