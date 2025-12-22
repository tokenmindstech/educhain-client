interface RoadmapCardProps {
  item: {
    timeline: string;
    milestones: string[];
  };
}

export default function RoadmapCard({ item }: RoadmapCardProps) {
  return (
    <div className="select-none relative rounded-3xl bg-radial-problem p-8 border-3 border-white shadow-xl">
      {/* Timeline Badge */}
      <div className="bg-radial-solution w-fit backdrop-blur-sm rounded-full px-4 py-1.5 absolute -top-5 left-6 sm:left-8">
        <h2 className="text-base font-semibold text-white">{item.timeline}</h2>
      </div>

      {/* Milestones */}
      <ul className="space-y-2 text-black font-semibold">
        {item.milestones.map((milestone, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <span className="text-black shrink-0">•</span>
            <span className="text-sm sm:text-base leading-relaxed">
              {milestone}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
