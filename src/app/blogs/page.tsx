import React from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { getBlogPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Engineering Notes | Portfolio",
  description: "Technical articles and notes from my software engineering journey.",
};

// Posts live in src/content/blogs/*.mdx — add a file there to publish a new one
export default function BlogPage() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen font-sans">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Engineering Notes
        </h1>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          Articles and notes on backend engineering, APIs, databases, and the
          tools I use every day.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="flex min-h-[40vh] items-center justify-center px-6">
          <p className="max-w-2xl text-center text-base text-zinc-400 md:text-lg">
            New articles are coming soon.
          </p>
        </div>
      ) : (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-purple-500/50 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {post.metadata.tags?.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-purple-500/30 text-purple-400"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 group-hover:text-purple-300 transition-colors">
                {post.metadata.title}
              </h2>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400">
                {post.metadata.summary}
              </p>
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1 text-purple-400">
                  Read
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
