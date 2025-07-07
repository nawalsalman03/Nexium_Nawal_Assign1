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
    
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">Quote Generator</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Get Quotes by Topic</h2>
            <QuoteForm onSubmit={handleSubmit} />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Quotes</h2>
            {quotes.length > 0 ? (
              <QuoteList quotes={quotes} />
            ) : (
              <p className="text-white/70">Enter a topic to see quotes (motivation, success, life)</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
