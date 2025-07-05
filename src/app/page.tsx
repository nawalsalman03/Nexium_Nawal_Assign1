'use client';

import { useState } from 'react';
import { getQuotesByTopic, Topic } from '../lib/constants';
import { QuoteForm } from '../components/QuoteForm';
import { QuoteList } from '../components/QuoteList';

export default function Home() {
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleSubmit = (topic: Topic) => {
    const foundQuotes = getQuotesByTopic(topic);
    setQuotes(foundQuotes);
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Quote Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get Quotes by Topic</h2>
          <QuoteForm onSubmit={handleSubmit} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Quotes</h2>
          {quotes.length > 0 ? (
            <QuoteList quotes={quotes} />
          ) : (
            <p>Enter a topic to see quotes (motivation, success, life)</p>
          )}
        </div>
      </div>
    </main>
  );
}