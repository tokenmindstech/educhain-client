interface AnimatedHighlightsProps {
  items: string[];
  variant?: "primary" | "secondary";
}

export function AnimatedHighlights({
  items,
  variant = "primary",
}: AnimatedHighlightsProps) {
  const background = `${
    variant === "primary" ? "bg-white" : "bg-gradient-gold"
  }`;

  const multipledItems = [...items, ...items, ...items, ...items];
  const length = multipledItems.length;

  return (
    <div
      className={`
        ${background} relative overflow-hidden whitespace-nowrap py-3`}
    >
      <div className="flex flex-row gap-10 items-center animate-marquee">
        {multipledItems.map((item, index) => (
          <div className="flex items-center flex-row gap-10" key={index}>
            {/* Text */}
            <div className="text-xl font-semibold font-montserrat">{item}</div>

            {/* Dots */}
            {index !== length - 1 && (
              <div className="rounded-full h-1.25 w-1.25 bg-black" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
