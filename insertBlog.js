const mongoose = require("mongoose");
const Blog = require("./models/blog");

mongoose.connect("mongodb+srv://beingvig:z8qOvuqJUkEousEi@cluster0.2x2kr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });

const blogPosts = [
  {
    title: "10 Tips for a Stress-Free Move",
    content: "Moving can be a daunting task, but with proper planning...",
    image: "https://placehold.co/400x800",
    author: "Vignesh Esakkiappan",
    date: "2024-07-15",
    slug: "10-tips-for-stress-free-move",
  },
  {
    title: "How to Pack Fragile Items",
    content: "Learn the best techniques for packing your delicate belongings...",
    image: "https://placehold.co/400x800",
    author: "Vignesh Esakkiappan",
    date: "2024-08-10",
    slug: "how-to-pack-fragile-items",
  },
  {
    title: "The Benefits of Hiring Professional Movers",
    content: "Discover why hiring a professional moving company...",
    image: "https://placehold.co/400x800",
    author: "Vignesh Esakkiappan",
    date: "2024-09-05",
    slug: "benefits-of-hiring-professional-movers",
  },
];

async function importBlogs() {
  try {
    await Blog.insertMany(blogPosts);
    console.log("Blogs imported successfully");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error importing blogs:", error);
    mongoose.disconnect();
  }
}

importBlogs();
