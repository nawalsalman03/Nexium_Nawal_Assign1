export function QuoteSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="h-20 w-full rounded-lg bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-shimmer bg-[length:200%_100%] bg-no-repeat"
        />
      ))}
    </div>
  );
}
