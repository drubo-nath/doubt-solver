"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";
import Particles from "@/components/magicui/particles";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { useAuthStore } from "@/store/Auth";
import Link from "next/link";

const Icons = {
  openai: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#01579b"
        d="M41,15H24H7c-0.55,0-2,0.875-2,6s1.45,6,2,6h6v6l7,12h8l7-12v-6h6c0.55,0,2-0.875,2-6S41.55,15,41,15z"
      ></path>
      <path
        fill="#0288d1"
        d="M39,17.5C39,8.94,34,2,24,2S9,8.94,9,17.5S8.716,27,17,27h1c0,0,2,0.083,2,2s0,15.625,0,15.625C20,45.384,20.616,46,21.375,46h5.25C27.384,46,28,45.384,28,44.625V29c0-1.917,2-2,2-2h1C39.284,27,39,26.06,39,17.5z"
      ></path>
      <path
        fill="#29b6f6"
        d="M24,28L24,28c-1.1,0-2-0.9-2-2v-6c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v6C26,27.1,25.1,28,24,28z"
      ></path>
      <path
        fill="#c5cae9"
        d="M37,13H24H11c-2.761,0-3,2.239-3,5s0.083,3.25,3,4c0,0,4.708,1,10.171,1c0.671,0,1.001-0.259,1.288-0.689l0.502-0.753c0.247-0.371,0.643-0.556,1.038-0.556s0.792,0.185,1.038,0.556l0.502,0.753C25.828,22.741,26.157,23,26.829,23C32.292,23,37,22,37,22c2.917-0.75,3-1.239,3-4S39.761,13,37,13z"
      ></path>
      <path
        fill="#e8eaf6"
        d="M17.621,13l-8.404,8.403c-1.091-0.542-1.207-1.282-1.216-3.026L13.379,13H17.621z M23.414,13h-2.828l-9.096,9.096c0.495,0.092,1.344,0.24,2.439,0.389L23.414,13z"
      ></path>
      <path
        fill="#212121"
        d="M30.896 33.354L27.987 30 24 30 19.944 30 17.098 33.343 13 27 13 30.605 16.902 36.657 20 33.019 20 32 20.868 32 24 32 27.075 32 28 32 28 33.066 31.104 36.646 35 30.605 35 27z"
      ></path>
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        fill="#b3b3b3"
        filter="url(#a)"
      />
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#linearGradient1780)"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
};
const HeroSectionHeader = () => {
  const { session } = useAuthStore();

  const images = [" "];

  return (
    <div className="container mx-auto px-4">
      <Particles
        className="fixed inset-0 h-full w-full"
        quantity={500}
        ease={100}
        color="#ffffff"
        refresh
      />
      <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="space-y-4 text-center p-5">
            <h1 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#161837] via-[#2682cd] to-[#9475b5] bg-clip-text text-center text-5xl sm:text-7xl font-bold leading-none tracking-tighter text-transparent">
              DoubtSolver
            </h1>
            <p className="text-center sm:text-xl font-bold leading-none tracking-tighter">
              Join a vibrant community of learners, mentors, and educators. Post
              your questions, share knowledge, and collaborate in real time to
              achieve academic success!
            </p>
            <div className="flex items-center justify-center gap-4">
              {session ? (
                <Link href="/questions/ask">
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Ask a question
                    </span>
                  </ShimmerButton>
                </Link>
              ) : (
                <>
                  <Link href="/register">
                    <ShimmerButton className="shadow-2xl">
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Sign up
                      </span>
                    </ShimmerButton>
                  </Link>
                  <Link
                    href="/login"
                    className="relative rounded-full border border-neutral-200 px-8 py-3 font-medium text-black dark:border-white/[0.2] dark:text-white"
                  >
                    <span>Login</span>
                    <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex  justify-end ">
          <div className="relative  overflow-hidden mt-[50px]">
            <IconCloud
              icons={[
                <Icons.openai key="openai" />,
                <Icons.googleDrive key="gdrive" />,
                <Icons.whatsapp key="whatsapp" />,
                <Icons.openai key="openai" />,
                <Icons.googleDrive key="gdrive" />,
                <Icons.whatsapp key="whatsapp" />,
                <Icons.openai key="openai" />,
                <Icons.googleDrive key="gdrive" />,
                <Icons.whatsapp key="whatsapp" />,
                <Icons.openai key="openai" />,
                <Icons.googleDrive key="gdrive" />,
                <Icons.whatsapp key="whatsapp" />,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHeader;
