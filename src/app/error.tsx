"use client";

import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center px-6 py-16 text-center">

      {/* Badge */}
      <span className="bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4 inline-block">
        Page Error
      </span>

      {/* 400 */}
      <h2 className="font-black text-[#111] leading-none tracking-tight"
        style={{ fontSize: "clamp(7rem, 22vw, 16rem)", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "-0.02em" }}>
        <span className="text-blue-600">4</span>0<span className="text-blue-600">0</span>
      </h2>

      {/* Floating Shoe
      <div className="animate-bounce my-[-1rem]">
        <img
          src="https://www.pngplay.com/wp-content/uploads/13/Nike-Air-Force-1-Transparent-PNG.png"
          alt="sneaker"
          className="w-48 md:w-72 drop-shadow-2xl -rotate-12"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div> */}

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#111] mt-6">
        Oops! Wrong Step.
      </h1>

      {/* Description */}
      <p className="text-sm text-gray-400 mt-2 max-w-sm leading-relaxed">
        Looks like this page laced up and ran away.
        Don&apos;t worry — let&apos;s get you back on track.
      </p>

      {/* Error message */}
      {error?.message && (
        <p className="text-xs text-gray-300 mt-3 font-mono max-w-sm break-all">
          {error.message}
        </p>
      )}

      {/* Actions */}
      <div className="flex gap-3 mt-8 flex-wrap justify-center">
        <button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-widest uppercase px-8 py-3 transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-[#111] hover:bg-[#333] text-white text-xs font-bold tracking-widest uppercase px-8 py-3 transition-all hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}