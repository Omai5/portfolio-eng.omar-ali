import React from "react";

export const metadata = {
  title: "Engineering Notes | Portfolio",
  description: "Technical articles and notes from my software engineering journey.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen font-sans">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Engineering Notes
        </h1>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          Coming soon  I will be adding technical articles and notes here
        </p>
      </div>

      <div className="flex min-h-[40vh] items-center justify-center px-6">
        <p className="max-w-2xl text-center text-base text-zinc-400 md:text-lg">
          This section is coming soon. I will be adding technical articles and notes here.
        </p>
      </div>
    </div>
  );
}
