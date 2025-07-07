"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Topic } from "../lib/constants";

interface QuoteFormProps {
  onSubmit: (topic: Topic) => void;
}

export function QuoteForm({ onSubmit }: QuoteFormProps) {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      onSubmit(topic as Topic);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-4"
    >
      <Input 
        
        type="text"
        placeholder="Enter topic (e.g., motivation, life, success)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="flex-1"
      />
      <Button className="submit-button" type="submit">Get Quotes</Button>
    </form>
  );
}
