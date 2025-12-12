// export default function Posts({ posts }) {
//   console.log("posts");
//   return (
//     <div>
//       {posts.map((post, index) => (
//         <>
//           <h1 key={post.id}>{post.title}</h1>
//           <p>{post.body}</p>
//         </>
//       ))}
//     </div>
//   );
// }

export default async function Posts({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    {
      cache: "force-cache",
      next: {
        // revalidate: 3600, // revalidate and update changes after the timeout
        tags: ["postupdate"],
      },
    }
  );

  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

//get array of pages

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

//npx rimraf .next -  removes .next
