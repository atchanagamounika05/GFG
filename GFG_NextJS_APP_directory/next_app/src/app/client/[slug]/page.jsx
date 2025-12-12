"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Posts({ params }) {
  /* const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { slug } = await params;
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${slug}`
        );
        if (!data.ok) throw new Error("calling Api failed");
        const res = await data.json();
        setData(res);
      } catch (error) {
        console.log("error", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); */

  const { data, isLoading, error } = useQuery({
    queryKey: ["key"],
    queryFn: async () => {
      const { slug } = await params;
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${slug}`
      ).then((res) => res.json());

      return data;
    },
  });
  console.log(data);

  return (
    <div>
      {isLoading ? (
        <p>loading....</p>
      ) : (
        <>
          {" "}
          <h1>{data?.title}</h1>
          <p>{data?.body}</p>
        </>
      )}
      {error ? <p>{error.message}</p> : null}
    </div>
  );
}
