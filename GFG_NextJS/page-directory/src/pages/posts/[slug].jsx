// export default function Posts({ post }) {

//   console.log("post", post);
//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//       {/* {posts.map((post, index) => (
//         <>
//           <h1 key={post.id}>{post.title}</h1>
//           <p>{post.body}</p>
//         </>
//       ))} */}
//     </div>
//   );
// }

//app router - getServerSideProps has by default - server side render by default

/* export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const data = await res.json();
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  const paths = data.map((post, index) => ({
    params: { slug: post.id.toString() },
  }));
  return { paths, fallback: true };  // [slug: 1,2,3...100]
} */

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.slug}`
  );
  const post = await res.json();
  return {
    props: { post },
  };
}
