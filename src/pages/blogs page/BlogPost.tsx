import { Link, useParams } from "react-router-dom";

// Blog data (replace with API fetch later)
const blogPosts: Record<string, { title: string; content: string; image: string; author: string; date: string }> = {
  "10-tips-for-stress-free-move": {
    title: "10 Tips for a Stress-Free Move",
    content:
      "Moving can be a daunting task, but with proper planning and organization, it doesn't have to be stressful.\n\n1. Start early\n2. Declutter before packing\n3. Create a moving checklist\n4. Label your boxes clearly\n5. Pack an essentials box\n6. Hire professional movers\n7. Notify important parties of your move\n8. Transfer utilities\n9. Clean as you go\n10. Take care of yourself\n\nBy following these tips, you'll be well on your way to a stress-free move!",
      image: "https://placehold.co/400x800",
    author: "Vignesh Esakkiappan",
    date: "2024-07-15",
  },
  "how-to-pack-fragile-items": {
    title: "How to Pack Fragile Items",
    content:
      "Learn the best techniques for packing your delicate belongings to prevent damage during transit.\n\n1. Use bubble wrap\n2. Pack items tightly\n3. Label boxes as 'Fragile'\n4. Use proper cushioning materials",
    image: "https://placehold.co/400x800",
    author: "Vignesh Esakkiappan",
    date: "2024-08-10",
  },
  "benefits-of-hiring-professional-movers": {
    title: "The Benefits of Hiring Professional Movers",
    content:
      "Discover why hiring a professional moving company can save you time, money, and headaches.\n\n1. Experience in handling items\n2. Saves time and effort\n3. Reduces risk of damage\n4. Insured and reliable service",
    image: "https://placehold.co/400x800",
    author: "Vignesh Esakkiappan",
    date: "2024-09-05",
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>(); // Get slug from URL
  const post = slug ? blogPosts[slug] : null; // Find blog post

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
    <div className="container mx-auto px-4 py-8">
      <Link to="/blog" className="inline-block mb-6 text-primary hover:underline">
        &larr; Back to Blog
      </Link>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
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
