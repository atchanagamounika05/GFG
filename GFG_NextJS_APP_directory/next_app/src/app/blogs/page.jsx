"use client";

import { useState } from "react";
import BlogCard from "../components/BlogCard";

export default function blogsPage() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "blog1",
      desc: "blog 1 description",
      slug: "blog-1",
    },
    {
      id: 2,
      title: "blog2",
      desc: "blog 2 description",
      slug: "blog-2",
    },
    {
      id: 3,
      title: "blog3",
      desc: "blog 3 description",
      slug: "blog-3",
    },
  ]);
  const handleDelete = (id) => {
    const items = blogs.filter((blog, index) => id !== blog.id);
    setBlogs(items);
  };
  return (
    <div className="w-full grid grid-cols-3">
      {blogs.map((blog, index) => {
        return (
          <BlogCard key={blog.id} blog={blog} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}
