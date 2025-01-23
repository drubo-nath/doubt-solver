"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function Features({ title, description }: any) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          {description}
        </p>
      </BackgroundGradient>
    </div>
  );
}
