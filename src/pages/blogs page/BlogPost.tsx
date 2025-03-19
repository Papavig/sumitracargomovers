import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Blog {
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/blogs/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Blog not found");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setPost(null);
      })
      .finally(() => setLoading(false));
  }, [slug, apiUrl]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading blog...</p>;
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">404 - Blog Post Not Found</h2>
        <p className="text-gray-600">The blog post you are looking for does not exist.</p>
        <Link to="/blog" className="text-primary hover:underline mt-4 inline-block">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container min-h-screen mx-auto px-4 py-8 bg-white">
      <Navbar />
      <Link to="/blog" className="inline-block mb-6 text-primary hover:underline mt-4">
        &larr; Back to Blog
      </Link>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-6">
            By {post.author} | {post.date}
          </div>
          <div className="prose max-w-none space-y-4">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
