import {Card } from "@/components/ui/card";
interface QuoteListProps{
  quotes: string[];
}
export function QuoteList({quotes}:QuoteListProps){
  return (
    <div className="space-y-4">
     {quotes.map((quote,index)=>(
      <Card key={index} className="p-4">
        <p className="text-lg">{quote}</p>
      </Card>
     ))}
    </div>
  );
    
}