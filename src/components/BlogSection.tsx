
import React from "react";
import { BookOpen } from "lucide-react";

const posts = [
  {
    title: "Getting Started with React and TypeScript",
    date: "June 2025",
    excerpt: "Best practices for building scalable React projects using TypeScript.",
    url: "#",
  },
  {
    title: "5 Tips for Better UI Design",
    date: "May 2025",
    excerpt: "Simple tips to improve your design workflow and user experience.",
    url: "#",
  },
];

const BlogSection = () => (
  <section id="blog" className="max-w-4xl mx-auto my-20 px-6 py-10 bg-card rounded-2xl shadow-lg animate-fade-in">
    <div className="flex items-center gap-3 mb-6">
      <BookOpen className="text-primary" size={28} />
      <h2 className="text-3xl font-bold">Blog</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post, idx) => (
        <a
          key={idx}
          href={post.url}
          className="group bg-secondary rounded-lg p-6 shadow hover-scale transition block"
        >
          <div className="flex justify-between mb-2 text-xs text-muted-foreground">
            <span>{post.date}</span>
          </div>
          <div className="font-semibold text-lg mb-1 group-hover:text-primary">{post.title}</div>
          <div className="text-muted-foreground">{post.excerpt}</div>
          <span className="inline-block mt-4 text-primary underline underline-offset-2 group-hover:underline">
            Read more &rarr;
          </span>
        </a>
      ))}
    </div>
    {posts.length === 0 && (
      <div className="text-center text-muted-foreground">No blog posts yet. Stay tuned!</div>
    )}
  </section>
);

export default BlogSection;
