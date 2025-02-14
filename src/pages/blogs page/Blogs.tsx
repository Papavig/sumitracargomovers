import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "./BlogCard";
import Footer from "@/components/Footer";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 py-12">
          Latest Insights & Moving Tips from Sumitra Cargo Movers
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : blogPosts.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
