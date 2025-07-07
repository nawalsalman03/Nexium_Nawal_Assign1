import { Card, CardContent } from "@/components/ui/card";

interface QuoteListProps {
  quotes: string[];
}

export function QuoteList({ quotes }: QuoteListProps) {
  return (
    <div className="space-y-4">
      {quotes.map((quote, index) => (
        <Card key={index} className="bg-white/20 backdrop-blur-sm border border-white/30 text-white">
          <CardContent className="p-4">
            <p className="text-lg">{quote}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
