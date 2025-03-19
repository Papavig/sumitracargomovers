import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "./BlogCard";
import Footer from "@/components/Footer";

interface BlogPost {
  title: string;
  content: string;
  image: string;
  slug: string;
}

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs`)
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 py-12">
          Latest Insights & Moving Tips from Sumitra Cargo Movers
        </h1>
    
        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : blogPosts.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.content.substring(0, 100) + "..."}
                image={post.image}
                slug={post.slug}
              />
            ))}
          </div>
        )}
      </div>
    
      <Footer />
    </div>
  );
}
