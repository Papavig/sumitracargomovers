import { Link } from "react-router-dom"

interface BlogCardProps {
    title: string
    excerpt: string
    image: string
    slug: string
  }
  
  export default function BlogCard({ title, excerpt, image, slug }: BlogCardProps) {
    return (
      <div className="bg-white rounded-lg mb-16 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <img
          src={image || "https://placehold.co/400x200"}
          alt={title}
        //   width={400}
        //   height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <Link
            to={`/blog/${slug}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    )
  }
  