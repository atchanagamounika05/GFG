import Link from "next/link";

export default function BlogCard({ blog, handleDelete }) {
  return (
    <div href={`/blog/${blog.slug}`}>
      <h2>{blog.title}</h2>
      <p>{blog.desc}</p>
      <button onClick={() => handleDelete(blog.id)}>Delete</button>
    </div>
  );
}
