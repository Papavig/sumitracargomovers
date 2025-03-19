import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

type Blog = {
  _id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
};

type BlogForm = Omit<Blog, '_id'>;

const BlogManager: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const [form, setForm] = useState<BlogForm>({
    title: '',
    content: '',
    image: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchBlogs();
  }, [search]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${apiUrl}/blogs?search=${search}`);
      const blogsData = Array.isArray(res.data) ? res.data : [];
      setBlogs(blogsData);
    } catch (error) {
      console.error('Failed to fetch blogs', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    try {
      await axios.delete(`${apiUrl}/admin/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error('Failed to delete blog', error);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setForm({
      title: blog.title,
      content: blog.content,
      image: blog.image,
      author: blog.author,
      date: blog.date,
    });
    setShowForm(true);
  };

  const handleSubmit = async () => {
    try {
        const payload = {
            ...form,
            imageUrl: form.image, // Rename `image` to `imageUrl`
            date: new Date(form.date).toISOString(),
          };

      if (editingBlog) {
        await axios.put(`${apiUrl}/admin/blogs/${editingBlog._id}`, payload, {
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        await axios.post(`${apiUrl}/admin/blogs`, payload, {
          headers: { 'Content-Type': 'application/json' }
        });
      }
      fetchBlogs();
      setShowForm(false);
      setEditingBlog(null);
      setForm({ title: '', content: '', image: '', author: '', date: new Date().toISOString().split('T')[0] }); // Reset form
    } catch (error) {
      console.error('Failed to save blog. Ensure the backend expects an ISO date string for field.', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Blog Manager</h2>

      <div className="mb-4 flex gap-2">
        <Input
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => setShowForm(true)}>New Blog</Button>
      </div>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">{editingBlog ? 'Edit Blog' : 'New Blog'}</h3>
            <div className="mb-2">
              <Input
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <Input
                placeholder="Content"
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <Input
                placeholder="Image URL"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <Input
                placeholder="Author"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <Input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSubmit}>{editingBlog ? 'Update' : 'Create'} Blog</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {blogs.map((blog) => (
          <Card key={blog._id} className="p-4 flex justify-between items-center">
            <CardContent>
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-500">{blog.author}</p>
            </CardContent>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => handleEdit(blog)}>Edit</Button>
              <Button variant="destructive" onClick={() => handleDelete(blog._id)}>Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;
