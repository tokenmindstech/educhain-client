import { Badge } from "@/components/ui/badge";

export default function TopBanner() {
  return (
    <div className="px-3 sm:px-0 font-montserrat flex flex-col sm:flex-row gap-2 sm:gap-5 items-center justify-center py-2 bg-amber-200/70 w-full">
      <Badge
        className="text-white text-xs sm:text-sm font-semibold"
        variant="destructive"
      >
        Live on BNB chain
      </Badge>

      <div className="font-semibold text-center text-sm sm:text-base text-black">
        Total Supply: 10,000,000,000 EDUCHAIN 🔥
      </div>
    </div>
  );
}
