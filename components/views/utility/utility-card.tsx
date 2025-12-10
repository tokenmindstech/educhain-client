import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface UtilityCardProps {
  feature: {
    title: string;
    description: string;
    list: string[];
  };
}

export default function UtilityCard({ feature }: UtilityCardProps) {
  return (
    <Card className="p-8 rounded-3xl h-full text-start gap-2 flex flex-col justify-between">
      <h3 className="text-2xl font-bold white">{feature.title}</h3>
      <p className="text-sm font-medium">{feature.description}</p>

      <div className="space-y-4 mt-2 xl:mt-0">
        {feature.list.map((item, index) => (
          <div key={index} className="flex flex-row items-center gap-3">
            <div className="bg-white rounded-full p-0.5 shadow-[0_4px_8px_rgba(0,0,0,0.15)] h-fit">
              <Check strokeWidth={3} className="size-4 shrink-0 text-black" />
            </div>

            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
