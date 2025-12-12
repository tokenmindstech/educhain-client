"use client";

import { Fragment } from "react";
import Countdown from "./countdown";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TOKEN_INFO } from "@/lib/constant";

interface PresaleInfoProps {
  isLoading: boolean;
  data: APITokenInfoResponse | undefined;
  error: Error | null;
}

export default function PresaleInfo({
  isLoading,
  data,
  error,
}: PresaleInfoProps) {
  const tokenNextPrice =
    Number(process.env.NEXT_PUBLIC_TOKEN_NEXT_PRICE) || 0.012;
  const tokenListingPrice =
    Number(process.env.NEXT_PUBLIC_TOKEN_LISTING_PRICE) || 0.012;
  const holderCount = Number(process.env.NEXT_PUBLIC_HOLDER_COUNT) || 12135;
  const showHolderCount =
    process.env.NEXT_PUBLIC_SHOW_HOLDER_COUNT?.toLowerCase() === "true";
  const tokenPrice = data?.response ? Number(data.response.price) : 0.008;
  const nextPricePercentage = (
    ((tokenNextPrice - tokenPrice) / tokenPrice) *
    100
  ).toFixed(0);
  const listingPricePercentage = (
    ((tokenListingPrice - tokenPrice) / tokenPrice) *
    100
  ).toFixed(0);

  // Date calculations
  const startDate = data ? data?.response.start : null;
  const endDate = data ? data?.response.end : null;
  const isLive =
    startDate && endDate
      ? new Date() >= new Date(startDate) && new Date() <= new Date(endDate)
      : false;

  return (
    <div className="grid grid-cols-1 gap-5 font-monsterrat text-black">
      <Card
        data-aos="zoom-in"
        data-aos-delay="800"
        className="bg-white border-none shadow-none rounded-3xl w-full max-w-[525px] h-full flex flex-col items-center gap-2 md:gap-5 p-5"
      >
        {isLoading ? (
          <Fragment>
            {/* Title Skeleton */}
            <div className="flex flex-col w-full items-center gap-1">
              <Skeleton className="h-9 w-48 rounded-md" />
              <Skeleton className="h-9 w-64 rounded-md" />
            </div>

            {/* Price Cards Skeleton */}
            <div className="grid grid-cols-3 gap-5 w-full h-full">
              <Skeleton className="h-28 rounded-lg" />
              <Skeleton className="h-28 rounded-lg" />
              <Skeleton className="h-28 rounded-lg" />
            </div>
          </Fragment>
        ) : error ? (
          <div className="text-red-400 text-center">Failed to load data</div>
        ) : data ? (
          <Fragment>
            {/* Title */}
            <div className="flex flex-col w-full items-center gap-1">
              <h2 className="text-3xl font-bold text-center text-primary">
                Buy ${TOKEN_INFO.ticker}
              </h2>
              <p className="space-x-1 text-3xl text-center">
                <span className="text-muted-foreground/70 line-through">
                  from $
                  {tokenPrice.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  })}{" "}
                </span>

                <span className="font-semibold">
                  at $
                  {tokenNextPrice.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  })}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-3 gap-5 w-full h-full">
              {/* Current Price */}
              <div className="flex flex-col w-full h-28 bg-gradient-gold items-center justify-center rounded-lg text-center">
                <p className="whitespace-nowrap">Current Price</p>
                <p className="text-3xl font-semibold">
                  $
                  {tokenPrice.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  })}
                </p>
              </div>

              {/* Next Price */}
              <div className="flex flex-col w-full h-28 items-center justify-center rounded-lg gap-2 text-center">
                <p className="whitespace-nowrap">Next Price</p>
                <p className="text-3xl font-semibold">
                  $
                  {tokenNextPrice.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  })}
                </p>
                <p>(+{nextPricePercentage}%) increase</p>
              </div>

              {/* Listing Price */}
              <div className="flex flex-col w-full h-28 items-center justify-center rounded-lg gap-2 text-center">
                <p className="whitespace-nowrap">Listing Price</p>
                <p className="text-3xl font-semibold">
                  $
                  {tokenListingPrice.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  })}
                </p>
                <p>(+{listingPricePercentage}%) increase</p>
              </div>
            </div>
          </Fragment>
        ) : null}
      </Card>

      <Card
        data-aos="zoom-in"
        data-aos-delay="1000"
        className="bg-white border-none shadow-none rounded-3xl w-full max-w-[525px] h-full p-5"
      >
        {isLoading ? (
          <Fragment>
            <div className="flex flex-col space-y-5 w-full">
              {/* Title Skeleton */}
              <Skeleton className="h-7 w-48 mx-auto rounded-md" />

              {/* Countdown Skeleton */}
              <div className="grid grid-cols-4 gap-2 w-full bg-accent rounded-lg p-3 animate-pulse">
                <div className="flex flex-col items-center justify-center gap-1">
                  <Skeleton className="h-9 w-12 bg-white/20" />
                  <Skeleton className="h-3 w-10 bg-white/20" />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <Skeleton className="h-9 w-12 bg-white/20" />
                  <Skeleton className="h-3 w-10 bg-white/20" />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <Skeleton className="h-9 w-12 bg-white/20" />
                  <Skeleton className="h-3 w-10 bg-white/20" />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <Skeleton className="h-9 w-12 bg-white/20" />
                  <Skeleton className="h-3 w-10 bg-white/20" />
                </div>
              </div>

              {/* Holders & Button Skeleton */}
              <div className="flex flex-row items-center justify-evenly gap-6 w-full">
                <Skeleton className="h-8 w-32 rounded-md" />
                <Skeleton className="h-12 w-40 rounded-md" />
              </div>

              {/* Currency Skeleton */}
              <div className="w-full grid grid-cols-3 gap-3">
                <Skeleton className="h-14 rounded-md" />
                <Skeleton className="h-14 rounded-md" />
                <Skeleton className="h-14 rounded-md" />
              </div>
            </div>
          </Fragment>
        ) : error ? (
          <div className="text-red-400 text-center">Failed to load data</div>
        ) : data ? (
          <div className="flex flex-col space-y-5 w-full">
            {/* Price Title */}
            <p className="text-xl text-center">
              {isLive ? "The price increases in" : "Starts in"}
            </p>

            <Countdown
              targetDate={isLive ? new Date(endDate!) : new Date(startDate!)}
            />

            {/* Holders & CTE */}
            <div className="flex flex-row items-center justify-evenly gap-6 w-full">
              <p
                className={cn(
                  "text-2xl font-semibold whitespace-nowrap",
                  !showHolderCount && "hidden"
                )}
              >
                {holderCount.toLocaleString("en-US")}{" "}
                <span className="text-primary text-xl">Holders</span>
              </p>

              <Link
                href={TOKEN_INFO.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={"gradient"} className="px-8 font-semibold">
                  Get {TOKEN_INFO.ticker}
                </Button>
              </Link>
            </div>

            {/* Available Currency */}
            <div className="w-full grid grid-cols-3 gap-3 justify-center items-center">
              <div className="flex flex-row items-center justify-center gap-2 border border-gray-300 p-2 rounded-md bg-muted">
                <Image
                  src="/assets/logo/tokens/eth.png"
                  alt="ETH"
                  width={30}
                  height={30}
                />
                <p className="text-base text-black font-medium">ETH</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 border border-gray-300 p-2 rounded-md bg-muted">
                <Image
                  src="/assets/logo/tokens/usdt.png"
                  alt="USDT"
                  width={26}
                  height={26}
                />
                <p className="text-base text-black font-medium">USDT</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 border border-gray-300 p-2 rounded-md bg-muted">
                <Image
                  src="/assets/logo/tokens/card.png"
                  alt="Card"
                  width={30}
                  height={30}
                />
                <p className="text-base text-black font-medium">CARD</p>
              </div>
            </div>
          </div>
        ) : null}
      </Card>
    </div>
  );
}
