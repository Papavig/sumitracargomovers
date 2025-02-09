import Navbar from "@/components/Navbar";
import BlogCard from "./BlogCard";
import Footer from "@/components/Footer";

// This would typically come from a CMS or API
const blogPosts = [
  {
    title: "10 Tips for a Stress-Free Move",
    excerpt:
      "Moving doesn't have to be stressful. Follow these 10 tips to ensure a smooth relocation experience.",
    image: "https://placehold.co/200x400",
    slug: "10-tips-for-stress-free-move",
  },
  {
    title: "How to Pack Fragile Items",
    excerpt:
      "Learn the best techniques for packing your delicate belongings to prevent damage during transit.",
    image: "https://placehold.co/200x400",
    slug: "how-to-pack-fragile-items",
  },
  {
    title: "The Benefits of Hiring Professional Movers",
    excerpt:
      "Discover why hiring a professional moving company can save you time, money, and headaches.",
    image: "https://placehold.co/200x400",
    slug: "benefits-of-hiring-professional-movers",
  },
];

export default function Blogs() {
  return (
    <>
    <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 py-12">
          Latest Insights & Moving Tips from Sumitra Cargo Movers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
